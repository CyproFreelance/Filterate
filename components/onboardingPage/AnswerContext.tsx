// "use client";
// import React, { useState, useContext } from "react";

// type AnswerContextValue = {
//   pointer: number;
//   table: { [key: number]: number[] };
//   tableValues: string[];
//   setMemo: (currentChild: number, value: any, reference: string) => void;
//   setTableValue: (index: number, value: string) => void;
//   changeCurrentPointer: (incrementFactor: number) => void;
//   currentInputFocused: string;
//   setCurrentInputFocus: (value: string) => void;
//   optionValue: { [key: number]: string[] };
//   setOptionAnswerValue: (
//     index: number,
//     value: string,
//     reference: string
//   ) => void;
// };

// export const AnswerContext =  React.createContext<AnswerContextValue>({
//   pointer: 0,
//   table: {},
//   tableValues: Array(20).fill(""),
//   setMemo: () => {},
//   setTableValue: () => {},
//   changeCurrentPointer: () => {},
//   currentInputFocused: "",
//   setCurrentInputFocus: (value) => {},
//   optionValue: Array(20).fill(""),
//   setOptionAnswerValue: (index, value) => {},
// });

// export const AnswerProvider = ({
//   children,
// }: Readonly<{ children: React.ReactNode }>) => {
//   const [pointer, setPointer] = useState<number>(0);
//   const [table, setTable] = useState<{ [key: number]: number[] }>({});
//   const [tableValues, setTableValues] = useState<string[]>(Array(20).fill(""));
//   const [currentInputFocused, setCurrentInputFocused] = useState("");
//   const [optionValue, setOptionValue] = useState<{ [key: number]: string[] }>(
//     {}
//   );

//   const changeCurrentPointer = (incrementFactor: number) => {
//     setPointer((prevPointer) => prevPointer + incrementFactor);
//   };

//   const setMemo = (currentChild: number, value: any, reference: string) => {
//     setTable((prevTable) => {
//       if (reference === "add") {
//         const newTable = { ...prevTable };
//         newTable[currentChild] = [...(newTable[currentChild] || []), value];
//         return newTable;
//       } else {
//         const newTable = { ...prevTable };
//         const index = newTable[currentChild]?.indexOf(value);
//         if (index !== undefined && index !== -1) {
//           newTable[currentChild]?.splice(index, 1);
//         }
//         return newTable;
//       }
//     });
//   };

//   const setTableValue = (index: number, value: string) => {
//     setTableValues((prevTableValues) => {
//       const newTableValues = [...prevTableValues];
//       newTableValues[index] = value;
//       return newTableValues;
//     });
//   };

//   const setCurrentInputFocus = (value: any) => {
//     setCurrentInputFocused(value);
//   };

//   const setOptionAnswerValue = (
//     currentChild: number,
//     value: any,
//     reference: string
//   ) => {
//     setOptionValue((prevTableValues) => {
//       if (reference === "add") {
//         const newTable = { ...prevTableValues };
//         newTable[currentChild] = [...(newTable[currentChild] || []), value];
//         return newTable;
//       } else if (reference === "remove") {
//         const newTable = { ...prevTableValues };
//         const index = newTable[currentChild]?.indexOf(value);
//         if (index !== undefined && index !== -1) {
//           newTable[currentChild]?.splice(index, 1);
//         }
//         return newTable;
//       } else {
//         const newTable = { ...prevTableValues };
//         const index = newTable[currentChild]?.indexOf(value);
//         if (index !== undefined && index !== -1) {
//           newTable[currentChild].pop();
//         }
//         return newTable;
//       }
//     });
//   };

//   return (
//     <AnswerContext.Provider
//       value={{
//         pointer,
//         table,
//         tableValues,
//         setMemo,
//         setTableValue,
//         changeCurrentPointer,
//         currentInputFocused,
//         setCurrentInputFocus,
//         optionValue,
//         setOptionAnswerValue,
//       }}
//     >
//       {children}
//     </AnswerContext.Provider>
//   );
// };
