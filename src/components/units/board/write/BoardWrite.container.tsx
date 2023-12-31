import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
// TYPES
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import type { IBoardWriteProps, IFormValues } from "./BoardWrite.types";
// UI
import BoardWriteUI from "./BoardWrite.presenter";
// API
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();

  // FROM
  const {
    register,
    handleSubmit,
    watch,
    // watch: reg에 입력된 값을 객체에 담아준다
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmitHandler = (data: IFormValues): void => {
    console.log(data);
  };

  const writer = watch().writer;
  const password = watch().password;
  const title = watch().title;
  const contents = watch().contents;
  const youtubeUrl = watch().youtubeUrl;

  // DATA API
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  // 모든 input 값에 입력 값이 있다면.. 등록하기 버튼의 색을 바꾸어 주는 함수
  // const [isActive, setIsActive] = useState(false);
  let isActive = false;

  // watch의 객체 값을 배열로 정의한다
  // inputValue: 사용자가 입력해야하는 값의 개수
  const inputValue: number[] = Object.values(watch());

  // input 값이 채워질 때 카운트를 담는 변수
  let inputValueCount = 0;

  for (const key of inputValue) {
    if (inputValue[key] !== 0) {
      inputValueCount += 1;
    }
    // 배열에 넣은 객체 값이 있다면 카운트 값을 1씩 올린다.
  }

  if (inputValueCount === 0) {
    isActive = false;
  } else if (inputValue.length === inputValueCount) {
    isActive = true;
  }

  // onClickBoardNew
  const onClickSubmit = async (): Promise<void> => {
    const passwordLength = password.length;

    if (
      inputValue.length === inputValueCount &&
      passwordLength >= 4 &&
      passwordLength <= 16
    ) {
      alert("게시물 등록");

      // ========== 로직 설명 ==========
      // 버튼 함수 조건이 카운트와 inputValue 값이 동일할 때 함수가 실행된다.

      // <<< inputValueCount가 초기에 null인 이유 >>>
      // inputValue가 입력되지 않는 초기 상태는 배열 값이 없기에 length 값이 0이다.
      // inputValueCount도 0이라면 두 변수의 값이 모두 0이기에 input이 채워지지 않은 상태에서도 함수가 실행되기 떄문

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
            },
          },
        });

        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (title !== "" && contents !== "") {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (password !== "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;

    // boardId의 타입이 문자가 아닐 때 함수 실행 종료
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          updateBoardInput,
          password,
        },
      });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmitHandler={onSubmitHandler}
      errors={errors}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
