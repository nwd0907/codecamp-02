import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import {
  Button,
  ColumnBasic,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnTitle,
  Footer,
  Row,
  TableBottom,
  TableTop,
  Wrapper,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Wrapper>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((data: any, index: number) => (
        <Row key={data._id}>
          <ColumnBasic>{10 - index}</ColumnBasic>
          <ColumnTitle id={data._id} onClick={props.onClickMoveToBoardDetail}>
            {data.title}
          </ColumnTitle>
          <ColumnBasic>{data.writer}</ColumnBasic>
          <ColumnBasic>{getDate(data.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <Footer>
        <Paginations01
          refetch={props.refetch}
          count={props.dataBoardsCount?.fetchBoardsCount}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
        <Button onClick={props.onClickMoveToBoardNew}>
          <img src="/images/boards/list/write.png" />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
