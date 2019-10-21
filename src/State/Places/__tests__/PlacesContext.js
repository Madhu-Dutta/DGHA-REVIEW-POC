import { PlaceDefault } from "../PlacesContext";

describe("PlaceDefault export", () => {
  test("should be able to be traversed without returning null properties.", () => {
    const keys = Object.keys(PlaceDefault).map(key => PlaceDefault[key]);
    const actual = keys.includes(null);
    expect(actual).toBeFalsy();
  });
});
