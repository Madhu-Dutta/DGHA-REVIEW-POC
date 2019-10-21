import { transformPlace } from "../PlacesTransformers";
import { PlaceDefault } from "../PlacesContext";

const mockPlaceResult = {
  formatted_address: "3 Test Street, Test Suburb",
  icon: "https://www.testurl.com",
  place_id: "RaNdomTest3-String2-Id1",
  name: "Test Location",
  rating: 4.1999999,
  types: ["cafe", "food", "point_of_interest", "establishment"]
};

const expectedPlace = {
  id: mockPlaceResult.place_id,
  name: mockPlaceResult.name,
  address: mockPlaceResult.formatted_address,
  iconUrl: mockPlaceResult.icon,
  types: ["cafe", "food"],
  ratingOverall: Math.round(mockPlaceResult.rating),
  _original: mockPlaceResult
};

describe("transformPlace()", () => {
  test("should return a default Place object if input is null.", () => {
    const expected = PlaceDefault;
    const actual = transformPlace(null);
    expect(actual).toStrictEqual(expected);
  });
  test("should return a default Place object if input is empty object.", () => {
    const expected = PlaceDefault;
    const actual = transformPlace({});
    expect(actual).toStrictEqual(expected);
  });
  test("should return a transformed Place object.", () => {
    const mock = mockPlaceResult;
    const expected = expectedPlace;
    const actual = transformPlace(mock);
    expect(actual).toStrictEqual(expected);
  });
});
