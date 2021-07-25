import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(
    FETCH_BOARDS,
    { variables: { page: startPage } }
  );
  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/boards/${(event.target as Element).id}`);
  }

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      dataBoardsCount={dataBoardsCount}
      startPage={startPage}
      setStartPage={setStartPage}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
