import Link from "next/link";
import * as S from "./styles";
import { useFetchProduct } from "../../../hooks/queries/product/useFetchProduct";

export default function ViewItem01(props: { useditemId: string }): JSX.Element {
  const { data } = useFetchProduct({ useditemId: props.useditemId });
  return (
    <>
      {data !== undefined && (
        <Link href={`/products/${data.fetchUseditem._id}`}>
          <S.ViewItem>
            <S.MainImg src={`http://storage.googleapis.com/${data.fetchUseditem.images?.[0]}`} />
            <S.ItemName title={data.fetchUseditem.name}>{data.fetchUseditem.name}</S.ItemName>
          </S.ViewItem>
        </Link>
      )}
    </>
  );
}
