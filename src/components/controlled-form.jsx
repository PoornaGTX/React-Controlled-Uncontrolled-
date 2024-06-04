import React, { useEffect, useState } from 'react';

const ControlledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  useEffect(() => {
    if (name.length < 3) {
      console.log('name cannot be empty');
    }
  }, [name]);

  return (
    <form>
      <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="Number" name="age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />

      <button>Submit</button>
    </form>
  );
};

export default ControlledForm;
