import withAuth from "../../src/components/commons/hocs/withAuth";

function MarketsPage() {
  return (
    <>
      <br />
      <br />
      <div>중고마켓 페이지입니다.</div>
    </>
  );
}

export default withAuth(MarketsPage);
