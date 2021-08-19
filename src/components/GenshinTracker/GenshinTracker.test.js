import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import GenshinRegion from "./GenshinRegion";

import genshinData from "../../genshin/characters";
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
