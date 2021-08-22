import Head from "next/head";
import { useRouter } from "next/dist/client/router";

export default function BoardPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta property="og:title" content="여기는 마켓" />
        <meta property="og:description" content="여기는 마켓설명" />
      </Head>
      <button onClick={() => router.push("/board")}>보드로 이동</button>
    </>
  );
}
