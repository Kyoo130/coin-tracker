import { useParams } from "react-router-dom";

interface Params {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<Params>();
  return <h1>Coin: {coinId} 안녕하세요</h1>;
};

export default Coin;
