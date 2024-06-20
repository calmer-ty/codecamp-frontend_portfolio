import type { AnchorHTMLAttributes } from "react";

export interface IMenus {
  isOpen: boolean;
}

export interface IItemLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive: boolean;
}
