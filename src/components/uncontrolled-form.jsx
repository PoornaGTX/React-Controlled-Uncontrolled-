import React from 'react';

export const Uncontrolledform = () => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    console.log('====================================');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" placeholder="Name" ref={nameInputRef} />
      <input type="Number" name="age" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Uncontrolledform;
