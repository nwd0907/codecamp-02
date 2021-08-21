import { useRouter } from "next/dist/client/router"

export default function BoardPage(){

    const router = useRouter()

    return <button onClick={() => router.push('/market')}>마켓으로 이동</button>
}