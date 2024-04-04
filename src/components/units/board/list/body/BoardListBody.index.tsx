import Link from "next/link";
import * as S from "./BoardListBody.styles";

import { getDate } from "../../../../../commons/libraries/utils";

import type { IBoardDetailBodyProps } from "../BoardList.types";

const SECRET_STRING = "!@#$";

export default function BoardListBody(props: IBoardDetailBodyProps): JSX.Element {
  return (
    <S.Body>
      <S.Table>
        <thead>
          <tr>
            <S.THeadItem style={{ width: "15%" }}>번호</S.THeadItem>
            <S.THeadItem style={{ width: "50%" }}>제목</S.THeadItem>
            <S.THeadItem style={{ width: "20%" }}>작성자</S.THeadItem>
            <S.THeadItem style={{ width: "15%" }}>날짜</S.THeadItem>
          </tr>
        </thead>
        <tbody>
          {props.data?.fetchBoards.map((el) => (
            <S.List key={el._id}>
              <S.ListItem style={{ width: "15%" }}>{String(el._id).slice(-4).toUpperCase()}</S.ListItem>
              <S.ListItem>
                <Link href={`/boards/${el._id}`}>
                  <S.ListItemTitle style={{ width: "50%" }}>
                    {el.title
                      .replaceAll(props.keyword, `${SECRET_STRING}${props.keyword}${SECRET_STRING}`)
                      // 입력된 키워드 값의 문자열을 시크릿코드를 붙여 변경해주고
                      .split(SECRET_STRING)
                      // 시크릿 코드 기준으로 잘라 배열로 변환한다.
                      .map((el, index) => (
                        <S.KeywordToken key={`${el}_${index}`} isMatched={props.keyword === el}>
                          {el}
                        </S.KeywordToken>
                      ))}
                  </S.ListItemTitle>
                </Link>
              </S.ListItem>
              <S.ListItem style={{ width: "20%" }}>{el.writer}</S.ListItem>
              <S.ListItem style={{ width: "15%" }}>{getDate(el.createdAt)}</S.ListItem>
            </S.List>
          ))}
        </tbody>
      </S.Table>
    </S.Body>
  );
}
