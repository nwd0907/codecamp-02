import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import withAuth from "../../src/components/commons/hocs/withAuth";
import { GlobalContext } from "../_app";

function MarketsPage() {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      Modal.error({ content: "로그인을 해주세요." });
      router.push("/login");
    }
  }, []);

  return (
    <>
      <br />
      <br />
      <div>중고마켓 페이지입니다.</div>
    </>
  );
}

export default withAuth(MarketsPage);
