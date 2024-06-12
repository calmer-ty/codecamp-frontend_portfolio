import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";
import type { MutationReturnType } from "../hooks.types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const useUploadFile = (): MutationReturnType<"uploadFile", IMutationUploadFileArgs> => {
  return useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);
};
