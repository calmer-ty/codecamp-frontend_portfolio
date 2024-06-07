import styled from "@emotion/styled";
import type { IMainPage } from "./types";

export const LayoutBody = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* flex-grow: 1;  Flex 아이템이 남은 공간을 모두 차지할 수 있도록 확장됩니다. */
  /* flex-shrink: 1;  Flex 아이템이 축소될 수 있습니다. */
  /* flex-basis: 0%;  Flex 아이템의 초기 크기를 0%로 설정합니다. (Flex 컨테이너 내에서 남은 공간을 모두 차지하기 위해) */
  /* 위 모든게 flex: 1로 표현할 수 있다 / Flex 아이템이 남은 공간을 모두 차지하여 가능한한 크게 확장됩니다.  */

  width: 100%;
  max-width: ${(props: IMainPage) => (props.path === "/" ? "100%" : "1280px")};
  min-height: 100%;
  margin: 80px auto 0;
  padding: ${(props: IMainPage) => (props.path === "/" ? "0" : "60px 30px")};
`;
