import {useRouter} from 'next/router'
import {gql, useQuery} from '@apollo/client'
import { Avatar, AvatarWrapper, Body, Contents, CreatedAt, Header, IconWrapper, Info, LinkIcon, LocationIcon, Title, Wrapper, Writer } from "../../../styles/boards/detail/BoardsDetail.styles";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            writer
            createdAt
            title
            contents
        }
    }
`

export default function BoardsDetailPage() {
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.boardId}
    })
    
    return (
        <Wrapper>
            <Header>
                <AvatarWrapper>
                    <Avatar src="/images/avatar.png" />
                    <Info>
                        <Writer>{data?.fetchBoard.writer}</Writer>
                        <CreatedAt>{data?.fetchBoard.createdAt}</CreatedAt>
                    </Info>
                </AvatarWrapper>
                <IconWrapper>
                    <LinkIcon src="/images/boards/detail/link.png" />
                    <LocationIcon src="/images/boards/detail/location.png" />
                </IconWrapper>
            </Header>
            <Body>
                <Title>{data?.fetchBoard.title}</Title>
                <Contents>{data?.fetchBoard.contents}</Contents>
            </Body>
        </Wrapper>
    )
}