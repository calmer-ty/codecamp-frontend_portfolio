import { useEffect } from "react";

export declare const window: typeof globalThis & {
  kakao: any;
};

export default function useMapSelection(lat: any, lng: any) {
  // args
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=86e8d7dcdac578c6f87227c9b54397f1";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const container = document.getElementById("map");
        const options = {
          center: markerPosition,
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        // 지도 레벨
        // map.setLevel(3, { anchor: markerPosition });
        map.setLevel(3, { animate: true });
        map.setLevel(3, {
          animate: {
            duration: 500,
          },
        });

        // 맵 마커 이미지
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
        const imageSize = new window.kakao.maps.Size(64, 69);
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });
        marker.setMap(map);
      });
    };
  }, [lat, lng]);
}
