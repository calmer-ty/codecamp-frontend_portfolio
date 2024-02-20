import Link from "next/link";
import * as S from "./MarketListBody.styles";

import { getDate } from "../../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";

import type { IMarketListBodyProps } from "../MarketList.types";

export default function MarketListBody(props: IMarketListBodyProps) {
  const SECRET_STRING = "!@#$";
  return (
    <S.Body>
      <S.Table>
        <tbody>
          {props.data?.fetchUseditems?.map((el) => (
            <S.List key={el._id}>
              <S.ListItem>{String(el._id).slice(-4).toUpperCase()}</S.ListItem>
              <S.ListItem>
                <Link href={`/markets/${el._id}`}>
                  <S.ListItemTitle>
                    {el.name
                      .replaceAll(props.keyword, `${SECRET_STRING}${props.keyword}${SECRET_STRING}`)
                      .split(SECRET_STRING)
                      .map((el) => (
                        <S.KeywordToken key={uuidv4()} isMatched={props.keyword === el}>
                          {el}
                        </S.KeywordToken>
                      ))}
                  </S.ListItemTitle>
                </Link>
              </S.ListItem>
              <S.ListItem>{el.seller}</S.ListItem>
              <S.ListItem>{getDate(el.createdAt)}</S.ListItem>
            </S.List>
          ))}
        </tbody>
      </S.Table>
    </S.Body>
  );
}
