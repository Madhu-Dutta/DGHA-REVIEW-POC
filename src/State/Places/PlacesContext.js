import { createContext } from "react";

const emptyString = "";
const emptyRating = 1;

// What the Place object looks like
const Place = {
  id: emptyString, // string
  name: emptyString, // string
  address: emptyString, // string
  iconUrl: emptyString, // string
  types: [], // string[]
  ratingOverall: emptyRating, // number
  _original: {} // object of Google Places Detail Response for development/debugging
};

const placesDefault = {
  current: Place,
  history: [], // Place[]
  handleChangePlace: placeResult => {}
};

export const PlacesContext = createContext(placesDefault);
export const PlacesProvider = PlacesContext.Provider;
export const PlacesConsumer = PlacesContext.Consumer;
export const PlaceDefault = Object.assign({}, Place);
