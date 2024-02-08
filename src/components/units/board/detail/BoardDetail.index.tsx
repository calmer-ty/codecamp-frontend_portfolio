import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";

// 커스텀 훅
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useRouter } from "next/router";
import { useBoard } from "../../../commons/hooks/customs/useBoard";
import { useQueryFetchBoard } from "../../../commons/hooks/queries/useQueryFetchBoard";

// antd 컴포넌트
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useBoardLike } from "../../../commons/hooks/customs/useBoardLike";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const boardId = router.query.boardId;
  if (typeof boardId !== "string") return <></>;

  const { data } = useQueryFetchBoard({
    boardId,
  });

  const { onClickMoveToPage } = useMoveToPage();

  const { onClickDelete } = useBoard();
  const { onClickLike, onClickDislike } = useBoardLike();

  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <S.Header>
            <S.RowWrap>
              <Avatar
                size={48}
                icon={<UserOutlined />}
                style={{ marginRight: "12px" }}
              />
              <S.ColWrap>
                <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  Date: {getDate(data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
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
          <S.MoveBtn onClick={onClickMoveToPage(`/boards/${boardId}/edit`)}>
            수정하기
          </S.MoveBtn>
          <S.MoveBtn onClick={onClickDelete}>삭제하기</S.MoveBtn>
        </S.MoveBtnWrap>
      </S.Wrapper>
    </>
  );
}
