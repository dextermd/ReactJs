import React, { useState, useEffect } from 'react';

const LocalStorageComponent = () => {
  const [value, setValue] = useState(localStorage.getItem('myValue') || '');

  useEffect(() => {
    localStorage.setItem('myValue', value);
  }, [value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default LocalStorageComponent;
