import styled from "@emotion/styled";

export const MyButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props) {
  return (
    <MyButton type={props.type} isActive={props.isActive}>
      {props.buttonName}
    </MyButton>
  );
}
