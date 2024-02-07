// import { useEffect, useState } from "react";

// export default function useUploadFiles() {
//   const [fileUrls, setFileUrls] = useState(["", "", ""]);

//   const onChangeFileUrls = (fileUrl: string, index: number): void => {
//     const newFileUrls = [...fileUrls];
//     newFileUrls[index] = fileUrl;
//     setFileUrls(newFileUrls);
//   };
//   useEffect(() => {
//     const images = props.data?.fetchBoard.images;
//     if (images !== undefined && images !== null) setFileUrls([...images]);
//   }, [props.data]);

//   return {
//     onChangeFileUrls,
//   };
// }
