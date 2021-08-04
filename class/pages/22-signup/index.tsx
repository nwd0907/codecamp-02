import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import withAuth from "../../src/components/commons/hocs/withAuth";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  async function onClickSignup() {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: email,
            password: password,
            name: name,
          },
        },
      });
      alert("회원가입 완료!!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="text" onChange={onChangePassword} />
      <br />
      이름: <input type="text" onChange={onChangeName} />
      <br />
      <button onClick={onClickSignup}>가입하기</button>
    </>
  );
}

export default withAuth(SignupPage);
