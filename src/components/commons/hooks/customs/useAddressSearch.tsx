import { useState } from "react";
import type { Address } from "react-daum-postcode";
import type { UseFormSetValue } from "react-hook-form";
import type { IFormData } from "../../../units/board/write/BoardWrite.types";

export const useAddressSearch = (
  setValue: UseFormSetValue<IFormData>
): {
  isOpen: boolean;
  zipcode: string;
  address: string;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
} => {
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    zipcode,
    address,
    onClickAddressSearch,
    onCompleteAddressSearch,
  };
};
