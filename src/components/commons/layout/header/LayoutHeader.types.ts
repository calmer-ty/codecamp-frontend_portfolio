import type { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderProps {
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  accessToken: string;
}
