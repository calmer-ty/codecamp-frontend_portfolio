import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import type { IBoardWriteProps, IFormValues } from "./BoardWrite.types";

// API
import { useState } from "react";
// Library
import type { Address } from "react-daum-postcode";
// UI
import BoardWriteUI from "./BoardWrite.presenter";
import {
  collection,
  addDoc,
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
// import { v4 as uuid } from "uuid";

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
  const db = getFirestore(firebaseApp);

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
        const docRef = await addDoc(collection(db, "board"), {
          ...inputs,
          addressInput: {
            ...addressInput,
          },
        });

        void router.push(`/boards_firebase/${docRef.id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    const goalRef = doc(db, "boards_firebase", String(router.query.boardId));

    console.log(goalRef);

    // const updateBoardInput = {};

    // Set the "capital" field of the city 'DC'
    await updateDoc(goalRef, {
      writer: "update",
    });
  };

  // 주소 모달
  const [isOpenAddressModal, setIsOpenAddressModal] = useState(false);

  const onClickAddressSearch = (): void => {
    setIsOpenAddressModal((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpenAddressModal((prev) => !prev);
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
      docData={props.docData}
      // Zipcode
      isOpenAddressModal={isOpenAddressModal}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      zipcode={zipcode}
      address={address}
    />
  );
}
