import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import type { IBoardWriteProps, IFormValues } from "./BoardWrite.types";

// API
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState } from "react";
// Library
import type { Address } from "react-daum-postcode";
// UI
import BoardWriteUI from "./BoardWrite.presenter";

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

  // 리랜더링을 위한 state 선언
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const addressDetail = watch().addressDetail;

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
  let isActive = false;

  if (
    writer !== "" &&
    title !== "" &&
    contents !== "" &&
    password?.length >= 4 &&
    password?.length <= 16
  ) {
    isActive = true;
  }

  // onClickBoardNew
  const onClickSubmit = async (): Promise<void> => {
    if (
      writer !== "" &&
      title !== "" &&
      contents !== "" &&
      password?.length >= 4 &&
      password?.length <= 16
    ) {
      alert("게시물이 등록되었습니다.");

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: [...fileUrls],
            },
          },
        });
        console.log(result.data?.createBoard);
        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (
      title !== "" &&
      contents !== "" &&
      youtubeUrl !== "" &&
      zipcode !== "" &&
      address !== "" &&
      addressDetail !== ""
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    // boardId의 타입이 문자가 아닐 때 함수 실행 종료
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 주소 모달
  const [isOpen, setIsOpen] = useState(false);

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  // 파일 업로드
  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  console.log(fileUrls);

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
      // Zipcode
      isOpen={isOpen}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      zipcode={zipcode}
      address={address}
      // Upload
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
