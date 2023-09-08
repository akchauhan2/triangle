import React, { useState } from "react";

interface Triangle {
  height: number;
  width: number;
}

const calculateTriangleArea = (triangle: Triangle): number => {
  const { height, width } = triangle;
  return (height * width) / 2;
};

const TriangleAreaComponent = () => {
  const [triangle, setTriangle] = useState<Triangle>({ height: 0, width: 0 });

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(event.target.value, 10);
    setTriangle((prevTriangle) => ({ ...prevTriangle, height }));
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(event.target.value, 10);
    setTriangle((prevTriangle) => ({ ...prevTriangle, width }));
  };

  const area = calculateTriangleArea(triangle);

  return (
    <div className="center">
      <h2>Triangle Area Calculator</h2>
      <div>
        <label htmlFor="height-input">Height: </label>
        <input
          id="height-input"
          type="number"
          value={triangle.height}
          onChange={handleHeightChange}
        />
      </div>
      <div>
        <label htmlFor="width-input">Width: </label>
        <input
          id="width-input"
          type="number"
          value={triangle.width}
          onChange={handleWidthChange}
        />
      </div>
      <div>Area: {area}</div>
    </div>
  );
};

export default TriangleAreaComponent;
