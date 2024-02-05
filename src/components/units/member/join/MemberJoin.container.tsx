import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import MemberJoinUI from "./MemberJoin.presenter";
import { CREATE_USER } from "./MemberJoin.queries";
import type {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import type { IFormInputs } from "./MemberJoin.types";
import type { ChangeEvent } from "react";

export default function MemberJoin(): JSX.Element {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  const inputs = {
    email: watch().email,
    name: watch().name,
    password: watch().password,
  };

  const [passwordCheck, setPasswordCheck] = useState("");
  const onChangePasswordCheck = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordCheck(event.target.value);
  };

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickJoin = async (): Promise<void> => {
    if (
      inputs.email === "" ||
      inputs.name === "" ||
      inputs.password === "" ||
      passwordCheck === ""
    ) {
      alert("입력란이 비어있습니다.");
      return;
    }
    if (!inputs.email.includes("@")) {
      alert("이메일 형식에 맞게 입력해주세요.");
      return;
    }
    if (inputs.password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (inputs.password.length < 4 || inputs.password.length > 16) {
      alert("비밀번호는 4자 이상 16자 이하입니다.");
      return;
    }

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      alert(
        `${result.data?.createUser.name}님, 가입에 성공하셨습니다. 로그인을 해 주세요.`
      );
      void router.push("/member/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  console.log(errors);
  return (
    <MemberJoinUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onClickJoin={onClickJoin}
      onChangePasswordCheck={onChangePasswordCheck}
    />
  );
}
