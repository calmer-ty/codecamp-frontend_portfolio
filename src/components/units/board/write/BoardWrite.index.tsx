import { useState } from "react";
import { useForm } from "react-hook-form";
// import Upload01 from "../../../commons/uploads/01/Upload01.container";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteProps, IFormData } from "./BoardWrite.types";
import type { Address } from "react-daum-postcode";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../commons/libraries/validation";

// 커스텀 훅
import { useBoard } from "../../../commons/hooks/customs/useBoard";
import InputCustom from "../../../commons/inputs/custom";
// 커스텀 컴포넌트
import Error01 from "../../../commons/errors/01";
import Input01 from "../../../commons/inputs/01";
import Label01 from "../../../commons/labels/01";
import Textarea01 from "../../../commons/textarea/01";
import Radio01 from "../../../commons/radio/01";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      writer: props.data?.fetchBoard.writer ?? "",
      title: props.data?.fetchBoard.title ?? "",
      contents: props.data?.fetchBoard.contents ?? "",
      addressDetail: props.data?.fetchBoard.boardAddress?.addressDetail ?? "",
      youtubeUrl: props.data?.fetchBoard.youtubeUrl ?? "",
    },
  });

  const { onClickSubmit, onClickUpdate } = useBoard();
  // const { onChangeFileUrls } = useUploadFiles();

  const [isOpen, setIsOpen] = useState(false);

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    console.log(data);
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.Form
            onSubmit={handleSubmit(
              props.isEdit ? onClickUpdate : onClickSubmit
            )}
          >
            <S.RowWrap>
              <S.ColWrap>
                <Label01 text="작성자" />
                <InputCustom
                  width={480}
                  placeholder="이름을 입력해주세요."
                  readOnly={Boolean(props.data?.fetchBoard.writer)}
                  register={register("writer")}
                />
                <Error01 text={formState.errors.writer?.message} />
              </S.ColWrap>
              <S.ColWrap>
                <Label01 text="비밀번호" />
                <InputCustom
                  width={480}
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  register={register("password", {
                    minLength: {
                      value: 4,
                      message: "Min Length is 4",
                    },
                    maxLength: {
                      value: 16,
                      message: "Min Length is 16",
                    },
                  })}
                />
                <Error01 text={formState.errors.password?.message} />
              </S.ColWrap>
            </S.RowWrap>

            <S.ColWrap>
              <Label01 text="제목" />
              <Input01
                placeholder="제목을 입력해주세요."
                register={register("title")}
              />
              <Error01 text={formState.errors.title?.message} />
            </S.ColWrap>

            <S.ColWrap>
              <Label01 text="내용" />
              <Textarea01
                placeholder="내용을 작성해주세요."
                register={register("contents")}
              />
              <Error01 text={formState.errors.contents?.message} />
            </S.ColWrap>

            <S.ColWrap>
              <Label01 text="주소" />
              <S.ZipcodeWrap>
                <InputCustom
                  width={80}
                  value={
                    zipcode !== ""
                      ? zipcode
                      : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
                  }
                  readOnly
                  register={register("zipcode")}
                />
                <S.SearchBtn onClick={onClickAddressSearch}>
                  우편번호 검색
                </S.SearchBtn>
              </S.ZipcodeWrap>
              <Error01 text={formState.errors.zipcode?.message} />

              <Input01
                value={
                  address !== ""
                    ? address
                    : props.data?.fetchBoard.boardAddress?.address ?? ""
                }
                readOnly
                register={register("address")}
              />
              <Error01 text={formState.errors.address?.message} />
              <Input01
                defaultValue={
                  props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }
                readOnly
                register={register("addressDetail")}
              />
              <Error01 text={formState.errors.addressDetail?.message} />
            </S.ColWrap>

            <S.ColWrap>
              <Label01 text="유튜브" />
              <Input01
                placeholder="링크를 복사해주세요."
                register={register("youtubeUrl")}
              />
            </S.ColWrap>

            <S.ColWrap>
              <Label01 text="사진 첨부" />
              {/* <S.ImgWrap>
                {fileUrls.map((el, index) => {
                  return (
                    <Upload01
                      key={`${el}_${index}`}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={onChangeFileUrls}
                    />
                  );
                })}
              </S.ImgWrap> */}
            </S.ColWrap>

            <S.ColWrap>
              <Label01 text="메인설정" />
              <S.RadioWrap>
                <Radio01 register={register("setting")} />
                <S.RadioLabel>유튜브</S.RadioLabel>
                <Radio01 register={register("setting")} />
                <S.RadioLabel>사진</S.RadioLabel>
              </S.RadioWrap>
            </S.ColWrap>

            <S.SubmitBtn
              style={{
                backgroundColor: formState.isValid ? "#FFD600" : "#BDBDBD",
              }}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.SubmitBtn>
          </S.Form>
        </S.Container>

        {isOpen && (
          <S.AddressModal
            open={isOpen}
            onOk={onClickAddressSearch}
            onCancel={onClickAddressSearch}
          >
            <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
          </S.AddressModal>
        )}
      </S.Wrapper>
    </>
  );
}
