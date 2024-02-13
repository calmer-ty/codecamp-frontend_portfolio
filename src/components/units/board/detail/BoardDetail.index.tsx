import { useRouter } from "next/router";

// Custon Hooks
import { useBoardRate } from "../../../commons/hooks/customs/useBoardRate";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useFetchBoard } from "../../../commons/hooks/queries/useFetchBoard";
import { useBoard } from "../../../commons/hooks/customs/useBoard";

import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardDetailUI(): JSX.Element {
  const router = useRouter();
  // 아래 조건 시 빈 화면
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useFetchBoard({
    boardId: router.query.boardId,
  });

  console.log(data);

  const { onClickLike, onClickDislike } = useBoardRate();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDelete } = useBoard();
  return (
    <S.Wrapper>
      <S.CardWrap>
        <S.Header>
          <S.RowWrap>
            <S.Avatar src="/images/board/detail/ic_profile.png"></S.Avatar>
            <S.ColWrap>
              <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{getDate(data?.fetchBoard?.createdAt)}</S.CreatedAt>
            </S.ColWrap>
          </S.RowWrap>
          <S.RowWrap>
            <S.OptBtn src="/images/board/detail/ic_link.png"></S.OptBtn>
            <S.AddressInfo
              title={`${data?.fetchBoard?.boardAddress?.address ?? ""} ${
                data?.fetchBoard?.boardAddress?.addressDetail ?? ""
              }`}
            >
              <S.OptBtn src="/images/board/detail/ic_location.png"></S.OptBtn>
            </S.AddressInfo>
          </S.RowWrap>
        </S.Header>
        <S.Body>
          <S.Title>{data?.fetchBoard?.title}</S.Title>
          <S.ImgWrap>
            {data?.fetchBoard.images
              ?.filter((el) => el)
              .map((el) => (
                <S.ImgItem
                  key={el}
                  src={`http://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImgWrap>
          <S.Contents>{data?.fetchBoard?.contents}</S.Contents>
          <S.Youtube
            url={data?.fetchBoard?.youtubeUrl ?? ""}
            width={486}
            height={240}
            muted
            playing
          />
          <S.LikeWrap>
            <S.LikeItem>
              <S.LikeIcon
                onClick={onClickLike}
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
              <S.LikeScore>{data?.fetchBoard.likeCount}</S.LikeScore>
            </S.LikeItem>
            <S.LikeItem>
              <S.DislikeIcon
                onClick={onClickDislike}
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
              <S.LikeScore>{data?.fetchBoard.dislikeCount}</S.LikeScore>
            </S.LikeItem>
          </S.LikeWrap>
        </S.Body>
      </S.CardWrap>

      <S.MoveBtnWrap>
        <S.MoveBtn onClick={onClickMoveToPage("/boards")}>목록으로</S.MoveBtn>
        <S.MoveBtn
          onClick={onClickMoveToPage(`/boards/${data?.fetchBoard._id}/edit`)}
        >
          수정하기
        </S.MoveBtn>
        <S.MoveBtn onClick={onClickDelete}>삭제하기</S.MoveBtn>
      </S.MoveBtnWrap>
    </S.Wrapper>
  );
}
