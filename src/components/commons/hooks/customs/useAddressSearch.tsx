import { useState } from "react";
import type { Address } from "react-daum-postcode";

export default function useAddressSearch(): {
  isOpen: boolean;
  zipcode: string;
  address: string;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
} {
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
}
