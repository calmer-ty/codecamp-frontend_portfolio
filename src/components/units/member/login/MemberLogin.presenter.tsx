import * as S from "./MemberLogin.styles";
import type { IFormValues, ILoginUIProps } from "./MemberLogin.types";

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>Logo</S.Logo>
        <S.Form
          onSubmit={props.handleSubmit((data: IFormValues): void => {
            console.log(data);
          })}
        >
          <S.LoginInput
            type="text"
            placeholder="이메일을 입력해주세요."
            {...props.register("email", { required: "This is required." })}
          />
          <S.Error>{props.errors.email?.message}</S.Error>
          <S.LoginInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...props.register("password", { required: "This is required." })}
          />
          <S.Error>{props.errors.password?.message}</S.Error>
          <S.LoginState>
            <input type="checkbox" />
            <span>로그인 상태 유지</span>
          </S.LoginState>
        </S.Form>
        <S.SubmitBtn onClick={props.onClickLogin}>로그인</S.SubmitBtn>
      </S.Container>
    </S.Wrapper>
  );
}
