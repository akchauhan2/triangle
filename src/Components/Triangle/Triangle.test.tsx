import { render, fireEvent } from "@testing-library/react";
import TriangleAreaComponent from "./Area";

describe("TriangleAreaComponent", () => {
  test("calculates and displays the area of the triangle", () => {
    const { getByLabelText, getByText } = render(<TriangleAreaComponent />);

    const heightInput = getByLabelText("Height:");
    fireEvent.change(heightInput, { target: { value: "5" } });

    const widthInput = getByLabelText("Width:");
    fireEvent.change(widthInput, { target: { value: "10" } });

    const areaOutput = getByText("Area: 25");
    expect(areaOutput).toBeInTheDocument();
  });
});
