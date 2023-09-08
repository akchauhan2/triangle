import React, { useEffect, useState } from "react";

function NumberInputComponent() {
  const [number, setNumber] = useState<number>(0);
  const [num, setNum] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    const parsedNumber = number;

    if (parsedNumber && !isNaN(parsedNumber)) {
      const numbers = Array.from(
        { length: parsedNumber },
        (_, index) => index + 1
      );
      setNum(numbers.join());
    } else {
      setNum("");
    }
  }, [number]);

  return (
    <div className="number-input-component">
      <h2>Number Input Component</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={handleInputChange}
      />
      <input type="text" value={num} readOnly />
    </div>
  );
}

export default NumberInputComponent;
