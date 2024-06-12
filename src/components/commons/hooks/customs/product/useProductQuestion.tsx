import { useIdCheck } from "../useIdCheck";

import { FETCH_USEDITEM_QUESTIONS } from "../../queries/product/useFetchProductQuestions";
import { useCreateProductQuestion } from "../../mutations/product/useCreateProductQuestion";
import { useUpdateProductQuestion } from "../../mutations/product/useUpdateProductQuestion";
import { useDeleteProductQuestion } from "../../mutations/product/useDeleteProductQuestion";

import { Modal } from "antd";

import type { IUpdateUseditemQuestionInput } from "../../../../../commons/types/generated/types";
import type { IFormData } from "../../../comments/product/write/QuestionWrite.types";

interface IUseProductQuestionArgs {
  useditemQuestionId?: string;
  onToggleEdit?: () => void;
}

export default function useProductQuestion(args: IUseProductQuestionArgs): {
  onClickCreate: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  onClickDelete: () => Promise<void>;
} {
  const { id } = useIdCheck("useditemId");

  const [createQuestion] = useCreateProductQuestion();
  const [updateQuestion] = useUpdateProductQuestion();
  const [deleteQuestion] = useDeleteProductQuestion();

  const onClickDelete = async (): Promise<void> => {
    if (typeof args?.useditemQuestionId !== "string") return;

    try {
      await deleteQuestion({
        variables: {
          useditemQuestionId: args.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCreate = async (data: IFormData): Promise<void> => {
    try {
      await createQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: id },
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
      if (typeof args.useditemQuestionId !== "string") return;
      if (data.contents !== "") updateUseditemQuestionInput.contents = data.contents;
      await updateQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: args.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: id },
          },
        ],
      });
      args.onToggleEdit?.();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickCreate,
    onClickUpdate,
    onClickDelete,
  };
}
