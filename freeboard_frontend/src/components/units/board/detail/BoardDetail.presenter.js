import { Avatar, AvatarWrapper, Body, Contents, CreatedAt, Header, IconWrapper, Info, LinkIcon, LocationIcon, Title, Wrapper, Writer } from "./BoardDetail.styles";

export default function BoardDetailUI(props){
    return(
        <Wrapper>
            <Header>
                <AvatarWrapper>
                    <Avatar src="/images/avatar.png" />
                    <Info>
                        <Writer>{props.data?.fetchBoard.writer}</Writer>
                        <CreatedAt>{props.data?.fetchBoard.createdAt}</CreatedAt>
                    </Info>
                </AvatarWrapper>
                <IconWrapper>
                    <LinkIcon src="/images/boards/detail/link.png" />
                    <LocationIcon src="/images/boards/detail/location.png" />
                </IconWrapper>
            </Header>
            <Body>
                <Title>{props.data?.fetchBoard.title}</Title>
                <Contents>{props.data?.fetchBoard.contents}</Contents>
            </Body>
        </Wrapper>
    )
}