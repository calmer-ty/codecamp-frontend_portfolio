import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBoardDetailUIProps {
  docData: {
    title?: string;
    writer?: string;
    contents?: string;
    youtubeUrl?: string;
    addressInput?: {
      zipcode: string;
      address: string;
      addressDetail: string;
    };
  };
  // List
  onClickMoveToList: (event: MouseEvent<HTMLButtonElement>) => void;

  // Update
  onClickMoveToEdit: () => void;

  // Delete
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteBoard: () => Promise<void>;

  // Modal
  onToggleDeleteModal: () => void;
  isOpenDeleteModal: boolean;
  setIsOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
}
