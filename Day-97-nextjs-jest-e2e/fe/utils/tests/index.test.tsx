import Home from "@/pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders calculator", () => {
    render(<Home />);
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    // expect(screen.getByTestId("num1")).toBeInTheDocument();
    // expect(screen.getByTestId("num2")).toBeInTheDocument();
  });

  it("adds to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 4 } });

    fireEvent.click(addButton);
    expect(result).toHaveTextContent("9");
  });

  it("subtract to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("subtract");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 4 } });

    fireEvent.click(addButton);
    expect(result).toHaveTextContent("1");
  });

  it("multiply to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("multiply");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 4 } });

    fireEvent.click(addButton);
    expect(result).toHaveTextContent("20");
  });

  it("divide to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("divide");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 12 } });
    fireEvent.change(num2input, { target: { value: 4 } });

    fireEvent.click(addButton);
    expect(result).toHaveTextContent("3");
  });
});
