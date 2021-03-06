import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const { accessToken } = useContext(GlobalContext);
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>๐ LIVE</InnerLogo>
        {accessToken ? (
          <div>๋ก๊ทธ์ธ ์ฑ๊ณต!</div>
        ) : (
          <div>
            <InnerButton onClick={props.onClickMoveToLogin}>๋ก๊ทธ์ธ</InnerButton>
            <InnerButton>ํ์๊ฐ์</InnerButton>
          </div>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
