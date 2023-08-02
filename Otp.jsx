import { useRef } from "react";
const OtpInput = () => {
  const inputRefs = Array.from({ length: 4 }, () => useRef());
  function Change(index, e) {
    if (index < inputRefs.length - 1 && e.target.value !== "") {
      inputRefs[index + 1].current.focus();
    } else if (index > 0 && e.target.value === "") {
      inputRefs[index - 1].current.focus();
    }
  }
  return (
    <>
      {inputRefs.map((data, index) => (
        <input
          type="text"
          ref={data}
          onChange={(e) => Change(index, e)}
          maxLength={1}
          autoFocus={index === 0}
        />
      ))}
    </>
  );
};
export default OtpInput;
