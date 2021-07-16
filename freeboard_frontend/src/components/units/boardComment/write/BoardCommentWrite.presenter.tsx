import {
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  PencilIcon,
  Wrapper,
} from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI() {
  return (
    <Wrapper>
      <PencilIcon src="/images/boardComment/write/pencil.png" /> 댓글
      <div>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>
      <Contents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
      <BottomWrapper>
        <ContentsLength />
        <Button>등록하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
}
