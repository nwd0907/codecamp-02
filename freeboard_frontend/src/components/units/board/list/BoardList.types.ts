import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  startPage: number;
  setStartPage: (value: SetStateAction<number>) => void;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
