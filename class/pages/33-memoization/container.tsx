import { useCallback, /* useMemo, */ useState } from "react";
import Presenter from "./presenter";

export default function Container() {
  console.log("컨테이너(부모)가 렌더링 시작됩니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //   let randomNumber = useMemo(() => Math.random(), []); // 복잡한 계산할때 계산 결과 저장용도
  //   console.log(randomNumber);

  //   let aaa = useMemo(() => {
  //     return () => {
  //       console.log("let 클릭!!!");
  //       console.log(countLet + 1);
  //       countLet = countLet + 1;
  //     };
  //   }, []);

  const onClickCountLet = useCallback(() => {
    console.log("let 클릭!!!");
    console.log(countLet + 1);
    countLet = countLet + 1;
  }, []);

  // 의존성배열에 데이터가 적을때 사용하기,
  // 함수 내부가 크게 복잡하지 않을때 사용하기(만약, 복잡하다면 state 등 주의해서 사용하기)
  const onClickCountState = useCallback(() => {
    console.log("state 클릭!!!");
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>============= 컨테이너 ===============</div>
      <div>countLet: {countLet}</div>
      <button onClick={onClickCountLet}>countLet + 1</button>
      <br />
      <div>countState: {countState}</div>
      <button onClick={onClickCountState}>countState + 1</button>
      <div>====================================</div>
      <Presenter countLet={countLet} />
    </>
  );
}
