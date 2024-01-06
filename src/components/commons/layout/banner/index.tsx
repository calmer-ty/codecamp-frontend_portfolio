import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 400px;
  // background-color: blue;
  background: url("/images/layout/banner/banner_cover.png");
`;
const SliderItem = styled.div`
  height: 350px;
  background: url("images/layout/banner/banner01.png") no-repeat center/contain;
`;

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Wrapper>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <SliderItem>
            <h3>1</h3>
          </SliderItem>
          <SliderItem>
            <h3>2</h3>
          </SliderItem>
          <SliderItem>
            <h3>3</h3>
          </SliderItem>
          <SliderItem>
            <h3>4</h3>
          </SliderItem>
          <SliderItem>
            <h3>5</h3>
          </SliderItem>
          <SliderItem>
            <h3>6</h3>
          </SliderItem>
        </Slider>
      </Wrapper>
    </>
  );
}
