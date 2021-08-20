import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import GenshinRegion from "./GenshinRegion";

import genshinData from "../../data/characters";
import Character from "../character/Character";
// const userPref = genshinData.map((char) => {
//   return { ...char, checked: false };
// });

const testObject = { chars: [], book: "default", region: "default" };

test('Should render "no characters" message when list is empty', () => {
  const { getByText, getByLabelText } = render(
    <GenshinRegion singleRegion={testObject} />
  );
  expect(
    getByText("No selected characters for this region today!")
  ).toBeInTheDocument();
});

test("Should toggle click function when character is clicked in preferences", () => {
  const mockFn = jest.fn();
  const testData = {
    id: 1,
    name: "default",
    checked: false,
    handleClick: mockFn,
  };

  const { getByTestId, getAllByTestId } = render(<Character {...testData} />);

  const firstCheckbox = getAllByTestId("pref-checkbox")[0];

  fireEvent.click(firstCheckbox);

  expect(mockFn).toHaveBeenCalled();
});
