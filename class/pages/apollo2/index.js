import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

export default function ApolloPage() {
    const [writer, setWriter] = useState()
    const [password, setPassword] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    function onChangeWriter(event){
        setWriter(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }
    function onChangeTitle(event){
        setTitle(event.target.value)
    }
    function onChangeContents(event){
        setContents(event.target.value)
    }

    const [asdf] = useMutation(
        gql`
            mutation zzzzzzzzzzzz($aaa: String, $bbb: String, $ccc: String, $ddd: String){
                createBoard(writer:$aaa, password:$bbb, title:$ccc, contents:$ddd){
                    message
                }
            }
        `
    )

    async function onClickSubmit(){
        try{
            const result = await asdf({
                variables: {
                    aaa: writer,
                    bbb: password,
                    ccc: title,
                    ddd: contents
                }
            })
            alert(result.data.createBoard.message)
        } catch(error){
            alert(error.message)
        }
    }
    
    return (
        <>
            <div></div>
            작성자: <input type="text" onChange={onChangeWriter} /><br />
            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            글제목: <input type="text" onChange={onChangeTitle} /><br />
            글내용: <input type="text" onChange={onChangeContents} /><br />
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>
    )

}