import { useEffect, useState } from "react";

export declare const window: typeof globalThis & {
  kakao: any;
};

export const useMap = (
  lat: any,
  lng: any,
  enableClick: boolean
): {
  latlng: any;
  address: any;
} => {
  const [latlng, setLatlng] = useState<any>("");
  const [address, setAddress] = useState<any>("");
  const appKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        // -----------------------------------
        // 공통 부분: 맵 초기화
        // -----------------------------------

        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const options = {
          center: markerPosition,
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

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

        if (enableClick) {
          window.kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
            // / 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
            setLatlng(latlng);

            // 좌표에 따른 주소
            const geocoder = new window.kakao.maps.services.Geocoder();
            const coord = new window.kakao.maps.LatLng(latlng.Ma, latlng.La);
            const callback = function (result: any, status: any): void {
              const mapAddress = result[0].address.address_name;
              if (status === window.kakao.maps.services.Status.OK) {
                setAddress(mapAddress);
              }
            };
            geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
          });
        }
      });
    };
    return () => {
      // 스크립트 제거
      document.head.removeChild(script);
    };
  }, [lat, lng, enableClick]);

  return { latlng, address };
};
