"use client";
import React, { useContext, useState, useEffect } from "react";
import "./styles/option.css";
import { AnswerContext } from "../context/AnswerContext";

const Option: React.FC<any> = (props) => {
  const {
    pointer,
    table,
    setMemo,
    currentInputFocused,
    setCurrentInputFocus,
    tableValues,
    setTableValue,
    optionValue,
    setOptionAnswerValue,
  } = useContext(AnswerContext);

  const [focus, setFocus] = useState<boolean[]>(
    Array(props.children.length).fill(false)
  );
  const childrenData: string[] = props.children;

  useEffect(() => {
    setFocus(Array(props.children.length).fill(false));
  }, [pointer, props.children.length]);

  const handleClick = (index: number, value: string) => {
    if (props.freedom === false) {
      setCurrentInputFocus("");
      setTableValue(pointer, "");
      const prev_iterator = focus.indexOf(true);
      const newFocus = new Array(props.children.length).fill(false);
      newFocus[index] = true;
      setFocus(newFocus);
      setMemo(pointer, prev_iterator, "remove");
      setMemo(pointer, index, "add");
      setOptionAnswerValue(pointer, value, "remove_pop");
      setOptionAnswerValue(pointer, value, "add");
    } else {
      setCurrentInputFocus("");
      setTableValue(pointer, "");
      const newFocus = [...focus];
      if (table[pointer]?.includes(index)) {
        setFocus((prevFocus) => {
          let newFocus = [...prevFocus];
          newFocus[index] = false;
          return newFocus;
        });
        setOptionAnswerValue(pointer, value, "remove");
        setMemo(pointer, index, "remove");
      } else {
        setFocus((prevFocus) => {
          let newFocus = [...prevFocus];
          newFocus[index] = true;
          return newFocus;
        });
        setMemo(pointer, index, "add");
        setOptionAnswerValue(pointer, value, "add");
      }
    }
  };

  return (
    <>
      {childrenData.map((child: string, index: number) => {
        if (child === "") return null;
        const isChecked: boolean = table[pointer]?.includes(index) || false;
        const isSingle = props.freedom;
        return (
          <div
            key={index}
            className={`${
              (focus[index] || isChecked) && currentInputFocused === ""
                ? "border-blue"
                : "border-gray"
            } container flex gap-4 cursor-pointer container__option items-center`}
            onClick={() => handleClick(index, child)}
          >
            <div
              className={
                currentInputFocused === "" && (focus[index] || isChecked)
                  ? "fill"
                  : "bordered"
              }
            ></div>
            <div className="option_value">{child}</div>
          </div>
        );
      })}
    </>
  );
};

export default Option;
