import { useRouter } from "next/dist/client/router"

export default function BoardPage(){

    const router = useRouter()

    return <button onClick={() => router.push('/board')}>보드로 이동</button>
}