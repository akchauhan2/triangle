import { render, fireEvent } from "@testing-library/react";
import NumberInputComponent from "./NumberInputComponent";

describe("NumberInputComponent", () => {
  const number = 5;
  test("updates the number state and displays the calculated numbers", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <NumberInputComponent />
    );

    const numberInput = getByPlaceholderText("Enter a number");
    fireEvent.change(numberInput, { target: { value: number } });

    expect(numberInput).toHaveValue(number);

    const displayedNumbers = getByDisplayValue("1,2,3,4,5");
    expect(displayedNumbers).toBeInTheDocument();
  });

  test("clears the displayed numbers when the input is empty", () => {
    const { getByPlaceholderText, queryByDisplayValue } = render(
      <NumberInputComponent />
    );

    const numberInput = getByPlaceholderText("Enter a number");
    fireEvent.change(numberInput, { target: { value: number } });

    expect(numberInput).toHaveValue(number);

    fireEvent.change(numberInput, { target: { value: "" } });

    expect(numberInput).toHaveValue(null);

    const displayedNumbers = queryByDisplayValue("1,2,3,4,5");
    expect(displayedNumbers).toBeNull();
  });
});
