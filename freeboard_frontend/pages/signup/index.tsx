import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

const INPUTS_INIT = {
  email: "",
  password: "",
  name: "",
};

// prettier-ignore
export default function SignupPage() {
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [createUser] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(CREATE_USER);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const onClickSignup = () =>
    createUser({ variables: { createUserInput: { ...inputs } } });

  return (
    <>
      이메일: <input type="text" onChange={onChangeInputs} /><br />
      비밀번호: <input type="password" onChange={onChangeInputs} /><br />
      이름: <input type="text" onChange={onChangeInputs} /><br />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
