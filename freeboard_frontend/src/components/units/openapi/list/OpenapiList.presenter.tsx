import { DogImg, Wrapper } from "./OpenapiList.styles";
import { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((data, index) => (
          <>
            <DogImg key={data} src={data} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </Wrapper>
  );
}
