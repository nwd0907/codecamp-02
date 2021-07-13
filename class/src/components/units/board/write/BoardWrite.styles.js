import styled from '@emotion/styled'

export const MyInput = styled.input``

export const MyButton = styled.button`
    color: ${props => props.active ? 'red' : 'blue'} // color: yellow
`



/* 

"안녕하세요" + aaa + "입니다~"

`안녕하세요${aaa}입니다~` 

*/