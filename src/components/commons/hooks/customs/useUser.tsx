import { useRouter } from "next/router";
import { useMutationCreateUser } from "../mutations/useMutationCreateUser";
import type { IFormData } from "../../../units/member/join/MemberJoin.types";

import { Modal } from "antd";

export const useUser = () => {
  const router = useRouter();
  const [createUser] = useMutationCreateUser();

  const onClickJoin = async (data: IFormData): Promise<void> => {
    console.log(data);
    const { passwordCheck, ...inputs } = data;
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      Modal.success({
        content: `${result.data?.createUser.name}님 가입에 성공하셨습니다. 다시 로그인 해주세요!`,
      });
      void router.push("/member/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickJoin,
  };
};
