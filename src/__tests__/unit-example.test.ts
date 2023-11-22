import { setupCounter } from "../counter";

test("Sets up a button which increments a count on click", () => {
  const element = document.createElement("button");
  setupCounter(element);
  element.click();
  expect(element.innerHTML).toContain("1");
});