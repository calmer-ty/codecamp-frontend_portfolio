import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 900px;
`;
const DogImg = styled.img`
  width: 300px;
  height: 300px;
`;

export default function dogPage(): JSX.Element {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImg = async (): Promise<void> => {
      new Array(9).fill(1).forEach(async (_) => {
        const result = await axios.get(
          "https://www.iexexchange.io/products/market-data-connectivity"
        );
        setImgUrls((prev) => [...prev, result.data.message]);
      });
    };
    void fetchImg();
  }, []);

  console.log(imgUrls);

  return (
    <Wrapper>
      <Container>
        {imgUrls.map((el, _) => (
          <DogImg key={el} src={el} />
        ))}
      </Container>
    </Wrapper>
  );
}
