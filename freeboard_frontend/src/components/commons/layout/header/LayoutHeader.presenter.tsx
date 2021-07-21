import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo>💎 LIVE</InnerLogo>
        <div>
          <InnerButton>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
