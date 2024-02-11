import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";

import type { BoardListUIProps } from "./BoardList.types";
import Pagination01 from "../../../commons/paginations/01/Pagination01.index";
import Searchbar01 from "../../../commons/searchbars/01/SearchBar01.index";
import { v4 as uuidv4 } from "uuid";

const SECRET_STRING = "!@#$";

export default function BoardListUI(props: BoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <Searchbar01
          onChangeKeyword={props.onChangeKeyword}
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
        />
        <S.Table>
          <S.HeaderWrap>
            <S.ListItem style={{ width: "15%" }}>번호</S.ListItem>
            <S.ListItem style={{ width: "50%" }}>제목</S.ListItem>
            <S.ListItem style={{ width: "20%" }}>작성자</S.ListItem>
            <S.ListItem style={{ width: "15%" }}>날짜</S.ListItem>
          </S.HeaderWrap>
          {props.data?.fetchBoards.map((el) => (
            <S.List key={el._id}>
              <S.ListItem style={{ width: "15%" }}>
                {String(el._id).slice(-4).toUpperCase()}
              </S.ListItem>
              <S.ListItemTitle
                style={{ width: "50%" }}
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.title
                  .replaceAll(
                    props.keyword,
                    `${SECRET_STRING}${props.keyword}${SECRET_STRING}`
                  )
                  // 입력된 키워드 값의 문자열을 시크릿코드를 붙여 변경해주고
                  .split(SECRET_STRING)
                  // 시크릿 코드 기준으로 잘라 배열로 변환한다.
                  .map((el) => (
                    <S.KeywordToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                    >
                      {el}
                    </S.KeywordToken>
                  ))}
              </S.ListItemTitle>
              <S.ListItem style={{ width: "20%" }}>{el.writer}</S.ListItem>
              <S.ListItem style={{ width: "15%" }}>
                {getDate(el.createdAt)}
              </S.ListItem>
            </S.List>
          ))}
        </S.Table>
        {/* Pagination */}
        <Pagination01 refetch={props.refetch} count={props.count} />
        <S.MoveBtn onClick={props.onClickMoveToBoardNew}>
          <S.MoveBtnIcon src="/images/board/list/ic_create.png" />
          게시물 등록하기
        </S.MoveBtn>
      </S.Container>
    </S.Wrapper>
  );
}
