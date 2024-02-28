import { useIdCheck } from "./useIdCheck";

import { FETCH_USEDITEM_QUESTIONS } from "../queries/useFetchMarketQuestions";
import { useCreateMarketQuestion } from "../mutations/useCreateMarketQuestion";
import { useUpdateMarketQuestion } from "../mutations/useUpdateMarketQuestion";
import { useDeleteMarketQuestion } from "../mutations/useDeleteMarketQuestion";

import { Modal } from "antd";

import type { IFormData } from "../../comments/market/write/QuestionWrite.types";
import type { IUpdateUseditemQuestionInput } from "../../../../commons/types/generated/types";

interface IUseMarketQuestionArgs {
  useditemQuestionId?: string;
  onToggleEdit?: () => void;
}

export const useMarketQuestion = (args: IUseMarketQuestionArgs) => {
  const { id } = useIdCheck("useditemId");

  const [createQuestion] = useCreateMarketQuestion();
  const [updateQuestion] = useUpdateMarketQuestion();
  const [deleteQuestion] = useDeleteMarketQuestion();

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
    console.log(data);
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
};
