import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { LOGIN_USER } from "./MemberLogin.queries";
import MemberLoginUI from "./MemberLogin.presenter";
import type { IFormInputs } from "./MemberLogin.types";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useRouter } from "next/router";

export default function MemberLogin(): JSX.Element {
  const router = useRouter();
  const { visitedPage } = useMoveToPage();
  // FROM
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  const inputs = {
    email: watch().email,
    password: watch().password,
  };
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          ...inputs,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (
        accessToken === undefined ||
        inputs.email === "" ||
        inputs.password === ""
      ) {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push(visitedPage);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MemberLoginUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onClickLogin={onClickLogin}
    />
  );
}
