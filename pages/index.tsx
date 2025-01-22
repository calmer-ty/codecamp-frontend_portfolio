import Head from "next/head";

// Style
import * as S from "../src/commons/styles/landing";
import Link from "next/link";

export default function Home(): JSX.Element {
  const LANDING_MENUS = [
    {
      name: "자유게시판",
      imageSrc: "/images/landing/board.png",
      src: "/boards",
      desc: "자신의 생각을 공유해보세요.",
    },
    {
      name: "중고마켓",
      imageSrc: "/images/landing/e-commerce.jpg",
      src: "/products",
      desc: "사용하지 않는 물건을 판매하고, 구매할 수 있어요.",
    },
    {
      name: "마이페이지",
      imageSrc: "/images/landing/e-commerce.jpg",
      src: "myPage",
      desc: "나의 정보들을 확인해요.",
    },
    {
      name: "랜덤강아지",
      imageSrc: "/images/landing/animal.png",
      src: "/randomDogImg",
      desc: "다양한 강아지 사진을 볼 수 있어요.",
    },
    // {
    //   name: "openApi",
    //   src: "/images/landing/e-commerce.jpg",
    //   desc: "openApi",
    // },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Contents>
        <S.CustomSlider {...settings}>
          {LANDING_MENUS.map((el, index) => (
            <div className="SliderInner" key={`${el.name}_${index}`}>
              <div className="slideItem">
                <Link href={el.src ?? ""}>
                  <figure>
                    <figcaption>
                      <h3>{el.name}</h3>
                      <p>{el.desc}</p>
                    </figcaption>
                    <S.MainImg src={el.imageSrc} />
                  </figure>
                </Link>
              </div>
            </div>
          ))}
        </S.CustomSlider>
      </S.Contents>
    </>
  );
}
