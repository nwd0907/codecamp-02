import Head from "next/head";
import { useRouter } from "next/dist/client/router";

export default function BoardPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta property="og:title" content="여기는 보드" />
        <meta property="og:description" content="여기는 보드설명" />
      </Head>
      <button onClick={() => router.push("/market")}>마켓으로 이동</button>
    </>
  );
}
