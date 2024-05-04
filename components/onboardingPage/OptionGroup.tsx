// "use client";
// import React, { useContext, useEffect } from "react";
// import Option from "@/components/onboardingPage/Options";
// import axios from "axios";
// import { useState } from "react";
// // import "./styles/input.css";
// import { AnswerContext, AnswerProvider } from "@/components/onboardingPage/AnswerContext";

// const OptionGroup = (props: any) => {
//   const [userInput, setUserInput] = useState("");

//   const {
//     pointer,
//     changeCurrentPointer,
//     table,
//     tableValues,
//     setTableValue,
//     currentInputFocused,
//     setCurrentInputFocus,
//     optionValue,
//   } = useContext(AnswerContext);

//   useEffect(() => {
//     setUserInput(tableValues[pointer] || "");
//   }, [tableValues, pointer]);

//   async function handleClick(delta: any) {
//     if (table[pointer] == undefined && tableValues[pointer] == "") {
//       alert("the current question is required.");
//       return;
//     }
//     if (pointer + delta >= 17) {
//       let finalAnswers = [];
//       for (let i = 0; i < tableValues.length; ++i) {
//         if (tableValues[i] == "") {
//           finalAnswers[i] = optionValue[i];
//         } else {
//           finalAnswers[i] = tableValues[i];
//         }
//       }
//     //   try {
//     //     let response = await axios.post(
//     //       "http://localhost:3000/onboarding/onboardnow",
//     //       { soln: finalAnswers }
//     //     );
//     //     console.log(response);
//     //   } catch (error) {
//     //     console.log(error);
//     //   }

//       // window.location.href = "/dashboard";
//     }
//     if (pointer + delta >= 17 || pointer + delta < 0) {
//       return;
//     }
//     changeCurrentPointer(delta);
//   }

//   return (
//     <>
//       <div className="question mt-5 text-white text-2xl font-normal">
//         {props.question}
//       </div>
//       <div className="options mt-4 flex flex-col gap-3">
//         <Option children={props.childrenArray} freedom={props.free}></Option>
//         {props.other && (
//           <input
//           className="onboardingInput"
//             type="text"
//             placeholder={props.defaultText}
//             value={userInput}
//             onChange={(e) => {
//               setTableValue(pointer, e.target.value);
//               setCurrentInputFocus(e.target.value);
//             }}
//           />
//         )}
//         <div className="buttons flex justify-between">
//           <div
//             className="prev bg-[#ffcd0aff] text-black font-semibold px-7 py-2 uppercase cursor-pointer rounded-md"
//             onClick={() => {
//               handleClick(-1);
//             }}
//           >
//             Prev
//           </div>
//           <div
//             className="next bg-[#ffcd0aff] text-black font-semibold px-7 py-2 uppercase cursor-pointer rounded-md"
//             onClick={() => {
//               handleClick(1);
//             }}
//           >
//             Next
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OptionGroup;
