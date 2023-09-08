import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Numbers from "./Components/Numbers";
import Triangle from "./Components/Triangle";

describe("App", () => {
  test("renders the Numbers component", () => {
    const { getByText } = render(<App />);
    const numbersComponent = getByText("Number Input Component");
    expect(numbersComponent).toBeInTheDocument();

    const numbersChildComponent = render(<Numbers />);
    expect(numbersChildComponent).toBeTruthy();
  });

  test("renders the Triangle component", () => {
    const { getByText } = render(<App />);
    const triangleComponent = getByText("Triangle Area Calculator");
    expect(triangleComponent).toBeInTheDocument();

    const triangleChildComponent = render(<Triangle />);
    expect(triangleChildComponent).toBeTruthy();
  });
});
