import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

const Child = forwardRef((props, ref) => {
  return <div ref={ref}>Some TExt</div>;
});

const UseRefExample = () => {
  const [htmlBody, sethtmlBody] = useState();
  const divRef = createRef(null);
  const inputRef = createRef(null);
  console.log(inputRef);
  const handleOnchange = (e) => {
    console.log(inputRef.current.type);
  };

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = "Hello word editable";
  }, []);

  return (
    <div>
      Use ref Example
      <input
        type="text"
        placeholder="lucas"
        id="name"
        name="name"
        defaultValue={"hello word"}
        ref={inputRef}
      />
      <Child ref={divRef} />
    </div>
  );
};

export default UseRefExample;
