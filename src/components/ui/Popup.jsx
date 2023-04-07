import { useEffect, useState } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import ReactDOM from "react-dom";

const Popup = ({ text, setText, type, time = 5 }) => {
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    if (text?.length) {
      setCurrentText(text);
    } else {
      setCurrentText("");
    }
  }, [text]);

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        setCurrentText("");
        if (setText) {
          setText("");
        }
      }, time * 1000);
    timer();
  }, [currentText]);

  return(
    currentText ? (
      <div
        className={`z-[100] flex gap-2 items-center fixed top-2 right-5 pl-3 pr-4 rounded-md h-[60px] border-l-[4px] bg-white dark:bg-dark-200 shadow-card-200 ${
          type ? "border-green-500 text-green-500" : "border-red-500 text-red-500 duration-300"
        }`}
      >
        {type ? <FiCheckCircle className="text-[22px] mr-2" /> : <FiXCircle className="text-[22px] mr-2" />}
        <div className="mr-[30px]">
          <div className="text-lg text-black dark:text-white">{type ? "Success" : "Error"}</div>
          <p className="text-[12px] text-darkener-400 dark:text-white">{currentText}</p>
        </div>
      </div>
    ) : null
  );
};

export default Popup;
