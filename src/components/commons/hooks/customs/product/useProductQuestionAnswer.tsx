import { useCreateProductQuestionAnswer } from "../../mutations/product/useCreateProductQuestionAnswer";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../../queries/product/useFetchProductQuestionAnswers";
import { Modal } from "antd";

import { useDeleteProductQuestionAnswer } from "../../mutations/product/useDeleteProductQuestionAnswer";
import { useUpdateProductQuestionAnswer } from "../../mutations/product/useUpdateProductQuestionAnswer";

import type { IFormData } from "../../../comments/product/answer/writer/QuestionAnswerWrite.types";
import type { IUpdateUseditemQuestionAnswerInput } from "../../../../../commons/types/generated/types";

interface IUseProductQuestionAnswerProps {
  useditemQuestionId?: string;
  useditemQuestionAnswerId?: string;
  onToggleEdit?: (() => void) | undefined;
}

export const useProductQuestionAnswer = (
  props: IUseProductQuestionAnswerProps
): {
  onClickCreate: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  onClickDelete: () => Promise<void>;
} => {
  const [createQuestionAnswer] = useCreateProductQuestionAnswer();
  const [updateQuestionAnswer] = useUpdateProductQuestionAnswer();
  const [deleteQuestionAnswer] = useDeleteProductQuestionAnswer();
  const onClickCreate = async (data: IFormData): Promise<void> => {
    if (typeof props.useditemQuestionId !== "string") return;
    try {
      await createQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    data.contents = "";
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    // console.log("Updating answer with question ID:", props.useditemQuestionId);
    if (data.contents === "") {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    if (typeof props.useditemQuestionAnswerId !== "string") return;
    try {
      const updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionAnswerInput = { contents: data.contents };
      if (data.contents !== "") updateUseditemQuestionAnswerInput.contents = data.contents;
      await updateQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput,
          useditemQuestionAnswerId: props.useditemQuestionAnswerId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
      props.onToggleEdit?.();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDelete = async (): Promise<void> => {
    if (typeof props.useditemQuestionAnswerId !== "string") return;
    try {
      await deleteQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.useditemQuestionAnswerId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickCreate,
    onClickUpdate,
    onClickDelete,
  };
};
