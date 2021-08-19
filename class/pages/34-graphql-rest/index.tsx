import axios from "axios";

export default function GraphqlRestPage() {
  const onClickSubmit = async () => {
    const result = await axios.post(
      "https://backend02.codebootcamp.co.kr/graphql",
      {
        query: `
            mutation createBoard {
                createBoard(createBoardInput: { 
                    writer: "철수",
                    password: "1234",
                    title: "제목!!",
                    contents: "내용!!!"
                }){
                    _id
                    writer
                }
            }
        `,
      }
    );
    console.log(result);
  };

  return <button onClick={onClickSubmit}>등록하기</button>;
}
