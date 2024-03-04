import Link from "next/link";
import * as S from "./MarketListBody.styles";

import { v4 as uuidv4 } from "uuid";

import type { IMarketListBodyProps } from "../MarketList.types";
// import { useState } from "react";

export default function MarketListBody(props: IMarketListBodyProps) {
  const SECRET_STRING = "!@#$";

  // const [value, setValue] = useState();

  return (
    <S.Body>
      <S.Table>
        <tbody>
          {props.data?.fetchUseditems?.map((el) => (
            <S.List key={el._id}>
              {/* <div> */}
              <S.ListItem style={{ width: "160px", height: "160px", backgroundColor: "#ccc" }}>사진0</S.ListItem>
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
                <div>{el.remarks}</div>
                <div>{el.remarks}</div>
                <div>{el.seller.name ?? ""}</div>
              </S.ListItem>
              {/* </div> */}
              {/* <S.ListItem></S.ListItem> */}
              <S.ListPrice>
                <S.TagIcon style={{ fontSize: "40px" }} />
                <S.PriceText>{el.price?.toLocaleString()}원</S.PriceText>
              </S.ListPrice>
            </S.List>
          ))}
        </tbody>
      </S.Table>
    </S.Body>
  );
}
