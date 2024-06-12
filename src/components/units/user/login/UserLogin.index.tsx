import { useForm } from "react-hook-form";
// Validation
import { schemaUserLogin } from "../../../../commons/libraries/validation";
import { yupResolver } from "@hookform/resolvers/yup";
// Hooks
import { useUser } from "../../../commons/hooks/customs/useUser";
// Component
import Label01 from "../../../commons/element/labels/01";
import Error01 from "../../../commons/element/errors/01";
import Input02 from "../../../commons/element/inputs/02";
import Button03 from "../../../commons/element/buttons/03";
// Style
import * as S from "./UserLogin.styles";
// Type
import type { IFormDataUserLogin } from "./UserLogin.types";

export default function UserLogin(): JSX.Element {
  // FROM
  const { register, handleSubmit, formState } = useForm<IFormDataUserLogin>({
    resolver: yupResolver(schemaUserLogin),
  });

  const {
    // onClickLogin,
    onClickLoginExample,
  } = useUser();

  // 테스트

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>Logo</S.Logo>
        <S.Form onSubmit={handleSubmit(onClickLoginExample)}>
          <S.InputWrap>
            <Label01 text="이메일" />
            <Input02 register={register("email")} />
            <Error01 text={formState.errors.email?.message} />
          </S.InputWrap>
          <S.InputWrap>
            <Label01 text="비밀번호" />
            <Input02 type="password" register={register("password")} />
            <Error01 text={formState.errors.email?.message} />
          </S.InputWrap>
          <Button03 text="로그인하기" />
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
