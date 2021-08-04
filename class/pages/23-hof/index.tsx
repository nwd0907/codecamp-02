export default function HOFPage() {
  const onClickButton = (asdf) => (event) => {
    alert(asdf);
  };

  return <button onClick={onClickButton("12345")}>저를 클릭해주세요.</button>;
}
