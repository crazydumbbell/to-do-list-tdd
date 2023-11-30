import { fireEvent, render } from "@testing-library/react";
import CreateTodo from "./CreateTodo";

describe(`<CreateTodo />`, () => {
  it(`input & button 확인`, () => {
    const { getByText, getByPlaceholderText } = render(<CreateTodo />);

    getByPlaceholderText("할 일 입력!!!");

    getByText("투두생성");
  });

  it("input 입력값 확인", () => {
    const { getByPlaceholderText } = render(<CreateTodo />);

    const input = getByPlaceholderText("할 일 입력!!!");

    fireEvent.change(input, {
      target: {
        value: "쇼핑하기",
      },
    });

    expect(input).toHaveAttribute("value", "쇼핑하기");
  });

  it("투두생성", () => {
    const { getByText, getByPlaceholderText } = render(<CreateTodo />);
    const input = getByPlaceholderText("할 일 입력!!!");
    const submit = getByText("투두생성");

    fireEvent.change(input, {
      target: {
        value: "🛍️ 쇼핑하기",
      },
    });

    fireEvent.click(submit);

    expect(input).toHaveAttribute("value", "");
  });
});
