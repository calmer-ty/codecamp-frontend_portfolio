import * as S from "./MemberJoin.styles";
import type { IFormInputs, IMemberJoinUIProps } from "./MemberJoin.types";

export default function MemberJoinUI(props: IMemberJoinUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.Form
          onSubmit={props.handleSubmit((data: IFormInputs): void => {
            console.log(data);
          })}
        >
          <S.InputWrap>
            <S.InputTitle>이메일</S.InputTitle>
            <S.JoinInput
              type="text"
              {...props.register("email", {
                required: "This is required.",
              })}
            />
            <S.Error>{props.errors.email?.message}</S.Error>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputTitle>이름</S.InputTitle>
            <S.JoinInput
              type="text"
              {...props.register("name", {
                required: "This is required.",
              })}
            />
            <S.Error>{props.errors.name?.message}</S.Error>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.JoinInput
              type="password"
              {...props.register("password", {
                required: "This is required.",
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
            <S.Error>{props.errors.password?.message}</S.Error>
          </S.InputWrap>
          <S.InputWrap>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <S.JoinInput
              type="password"
              onChange={props.onChangePasswordCheck}
            />
            <S.Error></S.Error>
          </S.InputWrap>
          <S.SubmitBtn onClick={props.onClickJoin}>회원가입하기</S.SubmitBtn>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
