import { PlaceDefault } from "./PlacesContext";

export function transformPlace(placeResult) {
  return placeResult ? createPlace(placeResult) : PlaceDefault;
}

function createPlace(p) {
  const place = {
    id: p.place_id ? p.place_id : PlaceDefault.id,
    name: p.name ? p.name : PlaceDefault.name,
    address: p.formatted_address ? p.formatted_address : PlaceDefault.address,
    iconUrl: p.icon ? p.icon : PlaceDefault.iconUrl,
    types: filterTypes(p.types ? p.types : PlaceDefault.types),
    ratingOverall: Math.round(p.rating ? p.rating : PlaceDefault.ratingOverall),
    _original: p
  };

  return place;
}

function filterTypes(types) {
  const ignoredTypes = ["point_of_interest", "establishment"];
  const filteredTypes = types.filter(type => !ignoredTypes.includes(type));
  return filteredTypes;
}
