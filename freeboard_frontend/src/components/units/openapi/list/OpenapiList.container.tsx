import axios from "axios";
import { useEffect, useState } from "react";
import OpenapiListUI from "./OpenapiList.presenter";

export default function OpenapiList() {
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    const getImg = async () => {
      new Array(10).fill(1).map(async (_) => {
        const result: any = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setImgUrls((prev) => [...prev, result.data.message]);
      });
    };
    getImg();
  }, []);

  console.log(imgUrls);

  return <OpenapiListUI imgUrls={imgUrls} />;
}
