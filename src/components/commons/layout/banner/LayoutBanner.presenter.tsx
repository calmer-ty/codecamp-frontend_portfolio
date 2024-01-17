import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./LayoutBanner.styles";

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.Wrapper>
        <Slider {...settings}>
          <S.SliderItem>
            <h3>1</h3>
            <button>자유게시판</button>
          </S.SliderItem>
          <S.SliderItem>
            <h3>2</h3>
            <button>자유게시판</button>
          </S.SliderItem>
          <S.SliderItem>
            <h3>3</h3>
            <button>자유게시판</button>
          </S.SliderItem>
          <S.SliderItem>
            <h3>4</h3>
            <button>자유게시판</button>
          </S.SliderItem>
          <S.SliderItem>
            <h3>5</h3>
            <button>자유게시판</button>
          </S.SliderItem>
          <S.SliderItem>
            <h3>6</h3>
            <button>자유게시판</button>
          </S.SliderItem>
        </Slider>
      </S.Wrapper>
    </>
  );
}
