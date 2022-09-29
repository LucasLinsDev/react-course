import React, { createRef, useState } from "react";

const Form = () => {
  const nameRef = createRef(null);
  const ageRef = createRef(null);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const extractCurrentValueFromName = nameRef.current.value;
    const extractCurrentValueFromAgre = ageRef.current.value;

    console.log(extractCurrentValueFromAgre, extractCurrentValueFromName);

    setFormData({
      name: extractCurrentValueFromName,
      age: extractCurrentValueFromAgre,
    });

    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <input name="name" placeholder="name" ref={nameRef} />
        <input type="number" name="age" placeholder="Age" ref={ageRef} />
        <button type="submit">Submit</button>
      </form>

      {formData && Object.keys(formData).length > 0 ? (
        <p>
          Name is {formData.name} & and Age is {formData.age}
        </p>
      ) : null}
    </div>
  );
};

export default Form;
