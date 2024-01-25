import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import type { IBoardWriteProps, IFormValues } from "./BoardWrite.types";

// API
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
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
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmitHandler = (data: IFormValues): void => {
    console.log(data);
  };

  // 입력값 변수
  const inputs = {
    writer: watch().writer,
    password: watch().password,
    title: watch().title,
    contents: watch().contents,
    youtubeUrl: watch().youtubeUrl,
  };

  // 리랜더링을 위한 state 선언
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
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
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  // 모든 input 값에 입력 값이 있다면.. 등록하기 버튼의 색을 바꾸어 주는 함수
  let isActive = false;
  if (
    inputs.writer !== "" &&
    inputs.title !== "" &&
    inputs.contents !== "" &&
    inputs.password?.length >= 4 &&
    inputs.password?.length <= 16
  ) {
    isActive = true;
  }

  // 게시판 등록 기능
  const onClickSubmit = async (): Promise<void> => {
    if (
      inputs.writer !== "" &&
      inputs.title !== "" &&
      inputs.contents !== "" &&
      inputs.password?.length >= 4 &&
      inputs.password?.length <= 16
    ) {
      alert("게시물이 등록되었습니다.");

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
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

  // 게시판 수정 기능
  const onClickUpdate = async (): Promise<void> => {
    if (
      inputs.title !== "" &&
      inputs.contents !== "" &&
      inputs.youtubeUrl !== "" &&
      zipcode !== "" &&
      address !== "" &&
      addressDetail !== ""
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (inputs.password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (inputs.title !== "") updateBoardInput.title = inputs.title;
    if (inputs.contents !== "") updateBoardInput.contents = inputs.contents;
    if (inputs.youtubeUrl !== "")
      updateBoardInput.youtubeUrl = inputs.youtubeUrl;
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
          password: inputs.password,
          updateBoardInput,
        },
      });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 주소 모달창 기능
  const [isOpen, setIsOpen] = useState(false);

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  // 파일 업로드 기능
  // const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const onChangeFile = async (event: any): Promise<void> => {
    const file = event?.target.files?.[0];
    console.log(file);

    const result = await uploadFile({ variables: { file } });
    console.log(result);
  };
  void onChangeFile("허스키로 인한 임시 선언// 기능없음");

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
      // onChangeFile={onChangeFile}
    />
  );
}
