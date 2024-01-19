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
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";

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

  const uuid;

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
  const addressInput = {
    zipcode,
    address,
    addressDetail: watch().addressDetail,
  };

  // DATA API
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

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

  const board = collection(getFirestore(firebaseApp), "board");
  // onClickBoardNew
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
        void addDoc(board, {
          ...inputs,
          addressInput: {
            ...addressInput,
          },
        });

        // void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    if (
      inputs.title !== "" &&
      inputs.contents !== "" &&
      inputs.youtubeUrl !== "" &&
      addressInput.zipcode !== "" &&
      addressInput.address !== "" &&
      addressInput.addressDetail !== ""
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
    if (
      addressInput.zipcode !== "" ||
      addressInput.address !== "" ||
      addressInput.addressDetail !== ""
    ) {
      updateBoardInput.boardAddress = {};
      if (addressInput.zipcode !== "")
        updateBoardInput.boardAddress.zipcode = addressInput.zipcode;
      if (addressInput.address !== "")
        updateBoardInput.boardAddress.address = addressInput.address;
      if (addressInput.addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail =
          addressInput.addressDetail;
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
    />
  );
}
