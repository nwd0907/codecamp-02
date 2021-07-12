import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD} from './BoardWrite.queries'

export default function BoardWrite(){

    const router = useRouter()

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
    
    const [createBoard] = useMutation(CREATE_BOARD)
    
    async function onClickSubmit(){
        try{
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: password,
                        title: title,
                        contents: contents
                    }
                }
            })
            alert(result.data.createBoard._id)
            router.push(`/detail/${result.data.createBoard._id}`)
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <BoardWriteUI
            aaa={onChangeWriter}
            bbb={onChangePassword}
            ccc={onChangeTitle}
            ddd={onChangeContents}
            eee={onClickSubmit}
        />
    )

}





