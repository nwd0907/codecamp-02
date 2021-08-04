import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../../pages/_app";
import { Modal } from "antd";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const INPUTS_INIT = {
  email: "",
  password: "",
};

// prettier-ignore
export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const onClickLogin = async () => {
    try {
      const result = await loginUser({ variables: { ...inputs } });
      setAccessToken?.(result.data?.loginUser.accessToken || "");
      router.push("/markets");
    } catch (error) {
      Modal.error({ content: error.mesage });
    }
  };

  return (
    <div>
      <br />
      <br />
      <div>이메일:</div>
      <input type="text" onChange={onChangeInputs} />
      <div>비밀번호:</div>
      <input type="password" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
