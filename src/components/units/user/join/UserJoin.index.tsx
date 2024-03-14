import { useForm } from "react-hook-form";
// Validation
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUserJoin } from "../../../../commons/libraries/validation";
// Component
import Label01 from "../../../commons/element/labels/01";
import Error01 from "../../../commons/element/errors/01";
import Input02 from "../../../commons/element/inputs/02";
// Custom Hooks
import { useUser } from "../../../commons/hooks/customs/useUser";
import Button03 from "../../../commons/element/buttons/03";
// Style
import * as S from "./UserJoin.styles";
// Type
import type { IFormDataUserJoin } from "./UserJoin.types";

export default function UserJoin(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormDataUserJoin>({
    resolver: yupResolver(schemaUserJoin),
    mode: "onChange",
  });

  const { onClickJoin } = useUser();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.Form onSubmit={handleSubmit(onClickJoin)}>
          <S.InputWrap>
            <Label01 text="이메일" />
            <Input02 register={register("email")} />
            <Error01 text={formState.errors.email?.message} />
          </S.InputWrap>
          <S.InputWrap>
            <Label01 text="이름" />
            <Input02 register={register("name")} />
            <Error01 text={formState.errors.name?.message} />
          </S.InputWrap>
          <S.InputWrap>
            <Label01 text="비밀번호" />
            <Input02 type="password" register={register("password")} />
            <Error01 text={formState.errors.password?.message} />
          </S.InputWrap>
          <S.InputWrap>
            <Label01 text="비밀번호 확인" />
            <Input02 type="password" register={register("passwordCheck")} />
            <Error01 text={formState.errors.passwordCheck?.message} />
          </S.InputWrap>
          <Button03 text="회원가입하기" />
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
