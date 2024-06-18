import { useCreateProductQuestionAnswer } from "../../mutations/product/useCreateProductQuestionAnswer";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../../queries/product/useFetchProductQuestionAnswers";
import { Modal } from "antd";

import type { IFormData } from "../../../comments/product/answer/writer/QuestionAnswerWrite.types";
import { useDeleteProductQuestionAnswer } from "../../mutations/product/useDeleteProductQuestionAnswer";
interface IUseProductQuestionAnswerProps {
  useditemQuestionId?: string;
  useditemQuestionAnswerId?: string;
}

export const useProductQuestionAnswer = (
  props: IUseProductQuestionAnswerProps
): {
  onClickCreate: (data: IFormData) => Promise<void>;
  onClickDelete: () => Promise<void>;
} => {
  const [createQuestionAnswer] = useCreateProductQuestionAnswer();
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
      console.log("Refetching question answers with ID:", props.useditemQuestionId);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickCreate,
    onClickDelete,
  };
};
