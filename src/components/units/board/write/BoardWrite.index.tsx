import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBoardWrite } from "../../../../commons/libraries/validation";
// Hooks
import { useBoard } from "../../../commons/hooks/customs/board/useBoard";
import { useAddressSearch } from "../../../commons/hooks/customs/useAddressSearch";
// Component
import Button01 from "../../../commons/element/buttons/01";
import Error01 from "../../../commons/element/errors/01";
import Input01 from "../../../commons/element/inputs/01";
import Label01 from "../../../commons/element/labels/01";
import Upload01 from "../../../commons/uploads/01/Upload01.index";
// Style
import * as S from "./BoardWrite.styles";
// Type
import type { IBoardWriteProps, IFormData } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaBoardWrite),
    mode: "onChange",
  });
  const { isOpen, zipcode, address, onClickAddressSearch, onCompleteAddressSearch } = useAddressSearch();

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
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

  const { onClickSubmit, onClickUpdate } = useBoard({ fileUrls, address, zipcode });

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.Form onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickSubmit)}>
            <S.FlexRow>
              <S.InputWrap>
                <Label01 text="작성자" />
                <Input01
                  placeholder="이름을 작성해주세요."
                  defaultValue={props.data?.fetchBoard.writer ?? ""}
                  register={register("writer")}
                  readOnly={props.isEdit}
                />
                <Error01 text={formState.errors?.writer?.message} />
              </S.InputWrap>
              <S.InputWrap>
                <Label01 text="비밀번호" />
                <Input01 type="password" placeholder="비밀번호를 작성해주세요." register={register("password")} />
                <Error01 text={formState.errors?.password?.message} />
              </S.InputWrap>
            </S.FlexRow>

            <S.FlexColumn>
              <Label01 text="제목" />
              <Input01
                placeholder="제목을 작성해주세요."
                defaultValue={props.data?.fetchBoard.title ?? ""}
                register={register("title")}
              />
              <Error01 text={formState.errors?.title?.message} />
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="내용" />
              <S.Contents
                placeholder="내용을 작성해주세요."
                defaultValue={props.data?.fetchBoard.contents}
                {...register("contents")}
              />
              <Error01 text={formState.errors?.contents?.message} />
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="주소" />
              <S.AddressWrap>
                <S.FlexRow style={{ justifyContent: "flex-start", columnGap: "20px" }}>
                  <S.Zipcode
                    readOnly
                    value={zipcode !== "" ? zipcode : props.data?.fetchBoard.boardAddress?.zipcode ?? ""}
                    {...register("zipcode")}
                  />
                  <S.SearchBtn type="button" onClick={onClickAddressSearch}>
                    우편번호 검색
                  </S.SearchBtn>
                </S.FlexRow>
                <S.Input
                  value={address !== "" ? address : props.data?.fetchBoard.boardAddress?.address ?? ""}
                  readOnly
                  {...register("address")}
                />
                <Input01
                  defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}
                  register={register("addressDetail")}
                />
              </S.AddressWrap>
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="유튜브" />
              <Input01
                placeholder="링크를 복사해주세요."
                defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
                register={register("youtubeUrl")}
              />
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="사진첨부" />
              <S.ImgWrap>
                {fileUrls.map((el, index) => {
                  return (
                    <Upload01 key={`${el}_${index}`} index={index} fileUrl={el} onChangeFileUrls={onChangeFileUrls} />
                  );
                })}
              </S.ImgWrap>
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="메인설정" />
              <S.RadioWrap>
                <S.RadioBtn type="radio" {...register("mainSetting")} />
                <S.RadioLabel>유튜브</S.RadioLabel>
                <S.RadioBtn type="radio" {...register("mainSetting")} />
                <S.RadioLabel>사진</S.RadioLabel>
              </S.RadioWrap>
            </S.FlexColumn>

            <Button01 isActive={formState.isValid} text={props.isEdit ? "수정하기" : "등록하기"} />
          </S.Form>
        </S.Container>

        {isOpen && (
          <S.AddressModal open={isOpen} onOk={onClickAddressSearch} onCancel={onClickAddressSearch}>
            <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
          </S.AddressModal>
        )}
      </S.Wrapper>
    </>
  );
}
