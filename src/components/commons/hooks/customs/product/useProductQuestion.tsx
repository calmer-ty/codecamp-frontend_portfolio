import { useRouter } from "next/router";

import { useCreateProductQuestion } from "../../mutations/product/useCreateProductQuestion";
import { useUpdateProductQuestion } from "../../mutations/product/useUpdateProductQuestion";
import { useDeleteProductQuestion } from "../../mutations/product/useDeleteProductQuestion";
import { FETCH_USEDITEM_QUESTIONS } from "../../queries/product/useFetchProductQuestions";

import { Modal } from "antd";

import type { IUpdateUseditemQuestionInput } from "../../../../../commons/types/generated/types";
import type { IFormData } from "../../../comments/product/write/QuestionWrite.types";

interface IUseProductQuestionProps {
  useditemQuestionId?: string;
  onToggleEdit?: () => void;
}

export const useProductQuestion = (
  props: IUseProductQuestionProps
): {
  onClickCreate: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  onClickDelete: () => Promise<void>;
} => {
  const router = useRouter();
  const useditemId = router.query.useditemId as string;

  const [createQuestion] = useCreateProductQuestion();
  const [updateQuestion] = useUpdateProductQuestion();
  const [deleteQuestion] = useDeleteProductQuestion();

  const onClickCreate = async (data: IFormData): Promise<void> => {
    try {
      await createQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    data.contents = "";
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    if (data.contents === "") {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }

    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = { contents: data.contents };
      if (typeof props.useditemQuestionId !== "string") return;
      if (data.contents !== "") updateUseditemQuestionInput.contents = data.contents;
      await updateQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId },
          },
        ],
      });
      props.onToggleEdit?.();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDelete = async (): Promise<void> => {
    if (typeof props?.useditemQuestionId !== "string") return;

    try {
      await deleteQuestion({
        variables: {
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId },
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
