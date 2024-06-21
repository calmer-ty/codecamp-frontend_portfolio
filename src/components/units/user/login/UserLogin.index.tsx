import { useForm } from "react-hook-form";
import { useUser } from "../../../commons/hooks/customs/useUser";

import Label01 from "../../../commons/element/labels/01";
import Error01 from "../../../commons/element/errors/01";
import Input02 from "../../../commons/element/inputs/02";
import Button03 from "../../../commons/element/buttons/03";

import { schemaUserLogin } from "../../../../commons/libraries/validation";
import { yupResolver } from "@hookform/resolvers/yup";

import type { IFormDataUserLogin } from "./UserLogin.types";
import * as S from "./UserLogin.styles";

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
    <>
      <S.Logo src="/images/tae_logo_bk.webp"></S.Logo>
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
    </>
  );
}
