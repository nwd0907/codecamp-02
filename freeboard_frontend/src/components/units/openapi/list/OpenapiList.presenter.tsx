export default function OpenapiListUI(props) {
  return (
    <div>
      {props.imgUrls.map((data) => (
        <img src={data} style={{ width: "50px", height: "50px" }} />
      ))}
    </div>
  );
}
