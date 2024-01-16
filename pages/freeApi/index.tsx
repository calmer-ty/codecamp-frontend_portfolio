// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function publicApis(): JSX.Element {
//   const [publicApis, setPublicApis] = useState("");

//   useEffect(() => {
//     const funcPublicApis = async (): Promise<void> => {
//       const result = await axios.get("https://api.publicapis.org/");
//       console.log(result.data.message);
//       setPublicApis(result.data.message);
//     };
//     void funcPublicApis();
//   }, []);
//   return (
//     <>
//       <div>{publicApis}</div>
//     </>
//   );
// }
