import {
  getAllByTestId,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("Should toggle click when character is clicked in preferences", () => {
//   const { getByText, getAllByLabelText } = render(<App />);

//   const firstCheckbox = getAllByTestId("custom-checkbox-1");

//   fireEvent.click(firstCheckbox);

//   console.log(firstCheckbox.style.color);
//   expect(firstCheckbox.style.color).toEqual("white");
// });
