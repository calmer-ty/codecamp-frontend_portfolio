// import Head from "next/head";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// import {
//   Wrapper,
//   Title,
//   WriterWrap,
//   InputWrap,
//   Label,
//   Error,
//   Writer,
//   Password,
//   Subject,
//   Contents,
//   // 주소
//   ZipcodeWrap,
//   Zipcode,
//   ZipcodeSearchBtn,
//   Address,
//   Youtube,
//   ImgWrap,
//   UploadBtn,
//   OptionWrap,
//   RadioLabel,
//   RadioBtn,
//   PostRegBtn,
// } from "../../../styles/boardsNew";

// export default function BoardsNewPage() {
//   // const [writer, setWriter] = useState("");
//   // const [writerError, setWriterError] = useState("");

//   // const [password, setPassword] = useState("");
//   // const [passwordError, setPasswordError] = useState("");

//   // const [subject, setSubject] = useState("");
//   // const [subjectError, setSubjectError] = useState("");

//   // const [contents, setContents] = useState("");
//   // const [contentsError, setContentsError] = useState("");

//   // const [address, setAddress] = useState("");
//   // const [addressError, setAddressError] = useState("");

//   // const [youtube, setYoutube] = useState("");
//   // const [youtubeError, setYoutubeError] = useState("");

//   // const [mainSetting, setMainSetting] = useState("");
//   // const [mainSettingError, setMainSettingError] = useState("");

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm("");

//   console.log(watch());
//   // <<< 이벤트 감지 >>>
//   // 작성자 입력값 바인딩
//   // function onChangeWriter(event) {
//   //   setWriter(event.target.value);
//   // }
//   // // 비밀번호 입력값 바인딩
//   // function onChangePassword(event) {
//   //   setPassword(event.target.value);
//   // }
//   // // 제목 입력값 바인딩
//   // function onChangeSubject(event) {
//   //   setSubject(event.target.value);
//   // }
//   // // 내용 입력값 바인딩
//   // function onChangeContents(event) {
//   //   setContents(event.target.value);
//   // }
//   // // 주소 입력값 바인딩
//   // function onChangeAddress(event) {
//   //   setAddress(event.target.value);
//   // }
//   // // 유튜브 입력값 바인딩
//   // function onChangeYoutube(event) {
//   //   setYoutube(event.target.value);
//   // }
//   // // 메인설정 입력값 바인딩
//   // function onChangeMainSetting(event) {
//   //   setMainSetting(event.target.value);
//   // }

//   // 답안 코드
//   // function onChangeWriter(event) {
//   //   setWriter(event.target.value);
//   // if(event.target.value !== ""){
//   //   setWriterError("");
//   // }
//   // }

//   function onSubmitPostReg() {
//     // // 작성자 에러
//     // if (writer === "") {
//     //   setWriterError("작성자를 입력해주세요.");
//     // } else {
//     //   setWriterError("");
//     // }
//     // // 비밀번호 에러
//     // if (password === "") {
//     //   setPasswordError("비밀번호를 입력해주세요.");
//     // } else {
//     //   setPasswordError("");
//     // }
//     // // 제목 에러
//     // if (subject === "") {
//     //   setSubjectError("제목을 입력해주세요.");
//     // } else {
//     //   setSubjectError("");
//     // }
//     // // 내용 에러
//     // if (contents === "") {
//     //   setContentsError("내용을 입력해주세요.");
//     // } else {
//     //   setContentsError("");
//     // }
//     // // 주소 에러
//     // if (address === "") {
//     //   setAddressError("주소를 입력해주세요.");
//     // } else {
//     //   setAddressError("");
//     // }
//     // // 유튜브 에러
//     // if (youtube === "") {
//     //   setYoutubeError("유튜브 링크를 입력해주세요.");
//     // } else {
//     //   setYoutubeError("");
//     // }
//     // // 메인설정 에러
//     // if (mainSetting === "") {
//     //   setMainSettingError("설정을 선택해주세요.");
//     // } else {
//     //   setMainSettingError("");
//     // }
//     // 답안 코드
//     // if (!writer) {
//     //   setWriterError("작성자를 입력해주세요.");
//     // }
//   }
//   console.log(errors);
//   return (
//     <>
//       <Head>
//         <title>Freeboard Frontend</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Wrapper onSubmit={handleSubmit((data) => console.log(data))}>
//         <Title>게시물 등록</Title>
//         <WriterWrap>
//           <InputWrap>
//             <Label>작성자</Label>
//             <Writer
//               type="text"
//               placeholder="이름을 적어주세요."
//               // onChange={onChangeWriter}
//               {...register("writer", {
//                 required: "This is required.",
//               })}
//             />
//             <p className="error_message">{errors.writer?.message}</p>
//           </InputWrap>
//           <InputWrap>
//             <Label>비밀번호</Label>
//             <Password
//               type="text"
//               placeholder="비밀번호를 적어주세요."
//               // onChange={onChangePassword}
//               {...register("password", {
//                 required: "This is required.",
//                 minLength: {
//                   value: 4,
//                   message: "Min Length is 4",
//                 },
//               })}
//             />
//             <Error>{errors.password?.message}</Error>
//           </InputWrap>
//         </WriterWrap>

//         <InputWrap>
//           <Label>제목</Label>
//           <Subject
//             type="text"
//             placeholder="제목을 작성해주세요."
//             // onChange={onChangeSubject}
//             {...register("subject", {
//               required: "This is required.",
//             })}
//           />
//           <p className="error_message">{errors.subject?.message}</p>
//         </InputWrap>

//         <InputWrap>
//           <Label>내용</Label>
//           <Contents
//             // onChange={onChangeContents}
//             {...register("contents", {
//               required: "This is required.",
//             })}
//           />
//           <p className="error_message">{errors.contents?.message}</p>
//         </InputWrap>

//         <InputWrap>
//           <Label>주소</Label>
//           <ZipcodeWrap>
//             <Zipcode placeholder="07250" />
//             <ZipcodeSearchBtn>우편번호 검색</ZipcodeSearchBtn>
//           </ZipcodeWrap>
//           <Address
//             // onChange={onChangeAddress}
//             {...register("address", {
//               required: "This is required.",
//             })}
//           />
//           <Address
//             // onChange={onChangeAddress}
//             {...register("address", {
//               required: "This is required.",
//             })}
//           />
//           <p className="error_message">{errors.address?.message}</p>
//         </InputWrap>

//         <InputWrap>
//           <Label>유튜브</Label>
//           <Youtube
//             type="text"
//             placeholder="링크를 작성해주세요."
//             // onChange={onChangeYoutube}
//             {...register("youtube", {
//               required: "This is required.",
//             })}
//           />
//           <p className="error_message">{errors.youtube?.message}</p>
//         </InputWrap>

//         <ImgWrap>
//           <Label>사진 첨부</Label>
//           <UploadBtn>+</UploadBtn>
//           <UploadBtn>+</UploadBtn>
//           <UploadBtn>+</UploadBtn>
//         </ImgWrap>

//         <OptionWrap>
//           <Label>메인 설정</Label>
//           <RadioBtn
//             type="radio"
//             name="main-setting"
//             // onChange={onChangeMainSetting}
//             {...register("mainSetting", {
//               required: "This is required.",
//             })}
//           />
//           <RadioLabel>유튜브</RadioLabel>
//           <RadioBtn
//             type="radio"
//             name="main-setting"
//             // onChange={onChangeMainSetting}
//             {...register("mainSetting", {
//               required: "This is required.",
//             })}
//           />
//           <RadioLabel>사진</RadioLabel>
//           <p className="error_message">{errors.mainSetting?.message}</p>
//         </OptionWrap>

//         <PostRegBtn onSubmit={onClickPostReg}>등록하기</PostRegBtn>
//       </Wrapper>
//     </>
//   );
// }
