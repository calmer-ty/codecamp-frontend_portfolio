import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteProps, IFormData } from "./BoardWrite.types";

// yup Check
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBoardWrite } from "../../../../commons/libraries/validation";

// Custom Component
import InputCustom from "../../../commons/inputs/custom";
import Error01 from "../../../commons/errors/01";
import Input01 from "../../../commons/inputs/01";
import Label01 from "../../../commons/labels/01";
import Textarea01 from "../../../commons/textarea/01";
import Radio01 from "../../../commons/radio/01";
import Upload01 from "../../../commons/uploads/01/Upload01.index";

// Custom Hooks
import { useBoard } from "../../../commons/hooks/customs/useBoard";
import { useFileUrls } from "../../../commons/hooks/customs/useFileUrls";
import { useQueryFetchBoard } from "../../../commons/hooks/queries/useQueryFetchBoard";
import { useQueryIdChecker } from "../../../commons/hooks/customs/useQueryIdChecker";
import { useAddressSearch } from "../../../commons/hooks/customs/useAddressSearch";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const { id } = useQueryIdChecker("boardId");
  const { data } = useQueryFetchBoard({ boardId: id });

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaBoardWrite),
    mode: "onChange",
    defaultValues: {
      writer: data?.fetchBoard.writer ?? "#######error######",
      title: data?.fetchBoard.title ?? "#######error######",
      contents: data?.fetchBoard.contents ?? "#######error######",
      youtubeUrl: data?.fetchBoard.youtubeUrl ?? "#######error######",
      addressDetail:
        data?.fetchBoard.boardAddress?.addressDetail ?? "#######error######",
    },
  });

  const { fileUrls, setFileUrls, onChangeFileUrls } = useFileUrls();
  const {
    isOpen,
    address,
    zipcode,
    onClickAddressSearch,
    onCompleteAddressSearch,
  } = useAddressSearch();

  const { onClickSubmit, onClickUpdate } = useBoard(fileUrls, address, zipcode);

  useEffect(() => {
    const images = data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [data]);

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
                  readOnly={props.isEdit}
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

            <S.ColWrap style={{ rowGap: "20px" }}>
              <Label01 text="주소" />
              <S.AddressWrap>
                <S.AddressSearch>
                  <InputCustom
                    width={80}
                    value={
                      zipcode !== ""
                        ? zipcode
                        : data?.fetchBoard.boardAddress?.zipcode ?? ""
                    }
                    readOnly
                  />
                  <S.SearchBtn onClick={onClickAddressSearch}>
                    우편번호 검색
                  </S.SearchBtn>
                </S.AddressSearch>

                <Input01
                  value={
                    address !== ""
                      ? address
                      : data?.fetchBoard.boardAddress?.address ?? ""
                  }
                  readOnly
                />
                <Input01
                  defaultValue={
                    data?.fetchBoard.boardAddress?.addressDetail ?? ""
                  }
                  register={register("addressDetail")}
                />
              </S.AddressWrap>
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
              <S.ImgWrap>
                {fileUrls.map((el, index) => (
                  <Upload01
                    key={`${el}_${index}`}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  />
                ))}
              </S.ImgWrap>
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
                backgroundColor: formState.isValid ? "#FFD600" : "lightgray",
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
