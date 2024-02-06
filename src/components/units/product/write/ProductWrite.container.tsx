import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import type { IFormInputs, IProductWriteProps } from "./ProductWrite.types";

// API
import { CREATE_USED_ITEM } from "./ProductWrite.queries";
import { useEffect, useState } from "react";
// Library
import type { Address } from "react-daum-postcode";
// UI
import ProductWriteUI from "./ProductWrite.presenter";

export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  const router = useRouter();
  // FROM
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  // 입력값 변수
  const inputs = {
    name: watch().name,
    remarks: watch().remarks,
    contents: watch().contents,
    price: Number(watch().price),
    tags: watch().tags,
  };

  // 리랜더링을 위한 state 선언
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const addressDetail = watch().addressDetail;

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // DATA API
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  // const [updateBoard] = useMutation<
  //   Pick<IMutation, "updateBoard">,
  //   IMutationUpdateBoardArgs
  // >(UPDATE_BOARD);

  // 모든 input 값에 입력 값이 있다면.. 등록하기 버튼의 색을 바꾸어 주는 함수
  let isActive = false;
  if (inputs.name !== "" && inputs.remarks !== "" && inputs.price !== null) {
    isActive = true;
  }

  // 게시판 등록 기능
  const onClickSubmit = async (): Promise<void> => {
    if (inputs.name !== "" && inputs.remarks !== "" && inputs.price !== null) {
      alert("판매 상품이 등록되었습니다.");

      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              ...inputs,
              useditemAddress: {
                zipcode,
                address,
                addressDetail,
              },
              // images: fileUrls,
            },
          },
        });
        console.log(result);
        void router.push(`/boards/${result.data?.createUseditem._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  // 게시판 수정 기능
  // const onClickUpdate = async (): Promise<void> => {
  //   const currentFiles = JSON.stringify(fileUrls);
  //   const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
  //   const isChangedFiles = currentFiles !== defaultFiles;
  //   if (
  //     inputs.name !== "" &&
  //     inputs.remarks !== "" &&
  //     inputs.price !== "" &&
  //     zipcode === "" &&
  //     address === "" &&
  //     addressDetail === "" &&
  //     !isChangedFiles
  //   ) {
  //     alert("수정한 내용이 없습니다.");
  //     return;
  //   }

  //   const updateBoardInput: IUpdateBoardInput = {};
  //   if (inputs.name !== "") updateBoardInput.title = inputs.name;
  //   if (inputs.remarks !== "") updateBoardInput.contents = inputs.remarks;
  //   if (inputs.price !== "") updateBoardInput.youtubeUrl = inputs.price;
  //   if (zipcode !== "" || address !== "" || addressDetail !== "") {
  //     updateBoardInput.boardAddress = {};
  //     if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
  //     if (address !== "") updateBoardInput.boardAddress.address = address;
  //     if (addressDetail !== "")
  //       updateBoardInput.boardAddress.addressDetail = addressDetail;
  //   }
  //   if (isChangedFiles) updateBoardInput.images = fileUrls;

  //   // boardId의 타입이 문자가 아닐 때 함수 실행 종료
  //   if (typeof router.query.boardId !== "string") {
  //     alert("시스템에 문제가 있습니다.");
  //     return;
  //   }

  //   try {
  //     const result = await updateBoard({
  //       variables: {
  //         boardId: router.query.boardId,
  //         password: inputs.password,
  //         updateBoardInput,
  //       },
  //     });
  //     void router.push(`/boards/${result.data?.updateBoard._id}`);
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };

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

  // 업로드 컴포넌트에서 값을 받아온다, 이유는 게시판 작성 화면에도 이미지를 보여주기 위해선
  // Upload 컴포넌트의 file input클릭 시 얻어온 url 값이 필요하다
  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    // 객체나 배열은 값을 바꾸면 주소값은 그대로이기 떄문에 setState 에서 인식을 하지 못하여 리랜더링이 되지 않는다
    // 그래서 얕은 복사를 하여 새로운 배열로 변수를 만들어주어 배열 전체를 바꾸는식으로 스테이트 값을 변경한다.
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onClickSubmit={onClickSubmit}
      // onClickUpdate={onClickUpdate}
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
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}
