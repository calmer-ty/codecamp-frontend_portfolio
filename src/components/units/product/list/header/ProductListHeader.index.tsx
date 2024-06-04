import Link from "next/link";

import { useFetchProductsBest } from "../../../../commons/hooks/queries/product/useFetchProductsBest";
import Picked01 from "../../../../commons/picked/01";

import * as S from "./ProductListHeader.styles";

export default function ProductListHeader(): JSX.Element {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const { data } = useFetchProductsBest();
  return (
    <S.BestProduct>
      <S.Title>베스트 상품</S.Title>
      {/* <S.ProductList>
        {data?.fetchUseditemsOfTheBest.map((el) => (
          <Link key={el._id} href={`/products/${el._id}`}>
            <S.ListItem>
              <S.ItemFigure>
                <S.ItemThumbnail src={`http://storage.googleapis.com/${el.images?.[0]}`} />
                <S.ItemFigcaption>
                  <S.ItemTitle>{el.name}</S.ItemTitle>
                  <S.ItemRemark>{el.name}</S.ItemRemark>
                  <S.ItemPrice>{el.price?.toLocaleString()}원</S.ItemPrice>
                </S.ItemFigcaption>
                <Picked01 text={el.pickedCount} />
              </S.ItemFigure>
            </S.ListItem>
          </Link>
        ))}
      </S.ProductList> */}
      <S.CustomSlider {...settings}>
        {data?.fetchUseditemsOfTheBest.map((el) => (
          <Link key={el._id} href={`/products/${el._id}`}>
            <S.ListItem>
              <S.ItemFigure>
                <S.ItemThumbnail src={`http://storage.googleapis.com/${el.images?.[0]}`} />
                <S.ItemFigcaption>
                  <S.ItemTitle>{el.name}</S.ItemTitle>
                  <S.ItemRemark>{el.name}</S.ItemRemark>
                  <S.ItemPrice>{el.price?.toLocaleString()}원</S.ItemPrice>
                </S.ItemFigcaption>
                <Picked01 text={el.pickedCount} />
              </S.ItemFigure>
            </S.ListItem>
          </Link>
        ))}
      </S.CustomSlider>
    </S.BestProduct>
  );
}
