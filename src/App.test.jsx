import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  it("CreateTodo render check", () => {
    const { getByText } = render(<App />);

    getByText("투두생성");
  });

  it("TodoList 렌더링 확인", () => {
    const { getByTestId } = render(<App />);

    getByTestId("TodoList");
  });

  it("투두 리스트 확인", () => {
    const { getByText } = render(<App />);

    getByText("(^///^)낚시하기");
    getByText("╰(*°▽°*)╯롤체하기");
  });

  it("투두 생성 확인", () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const Input = getByPlaceholderText("할 일 입력!!!");
    const submit = getByText("투두생성");

    fireEvent.change(Input, {
      target: {
        value: "축하하기",
      },
    });
    fireEvent.submit(submit);

    getByText("축하하기");
  });

  it("투두 완료 확인", () => {
    const { getByText } = render(<App />);

    const span = getByText("(^///^)낚시하기");

    fireEvent.click(span);
    expect(span).toHaveClass("line-through");

    fireEvent.click(span);
    expect(span).not.toHaveClass("line-through");
  });

  it("투두 삭제", () => {
    const { getByText, queryByText } = render(<App />);

    const span = getByText("╰(*°▽°*)╯롤체하기");
    const button = span.nextSibling;

    fireEvent.click(button);

    const removedSpan = queryByText("╰(*°▽°*)╯롤체하기");
    expect(removedSpan).toBeNull();
    const existSpan = queryByText("(^///^)낚시하기");
    expect(existSpan).not.toBeNull();
  });
});
