import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'

const inputsInit = {
    writer: "",
    password: "",
    title: "",
    contents: ""
}

interface IProps {
    isEdit?: boolean
}
export default function BoardWrite(props: IProps){
    const router = useRouter()
    const [active, setActive] = useState(false)
    const [inputs, setInputs] = useState(inputsInit)
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    function onChangeInputs(event: ChangeEvent<HTMLInputElement>){
        const newInputs = {
            ...inputs,
            [event.target.name]: event.target.value,
        }
        setInputs(newInputs)
        if(Object.values(newInputs).every(data => data)) setActive(true)
    }
    
    async function onClickSubmit(){
        try{
            const result = await createBoard({
                variables: { createBoardInput: { ...inputs }}
            })
            alert(result.data.createBoard._id)
            router.push(`/detail/${result.data.createBoard._id}`)
        } catch(error){
            alert(error.message)
        }
    }

    async function onClickEdit(){
        try {
            const result = await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password: inputs.password,
                    updateBoardInput: {
                        title: inputs.title,
                        contents: inputs.contents
                    }
                }
            })
            alert(result.data.updateBoard._id)
            router.push(`/detail/${result.data.updateBoard._id}`)
        } catch(error) {
            alert(error.message)
        }
    }


    return (
        <BoardWriteUI
            onChangeInputs={onChangeInputs}
            onClickSubmit={onClickSubmit}
            onClickEdit={onClickEdit}
            active={active}
            isEdit={props.isEdit}
        />
    )
}





