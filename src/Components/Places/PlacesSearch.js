import React, { useState } from "react";
import {
  PlacesProvider,
  PlaceDefault,
  transformPlace
} from "../../State/Places";
import AccessibleAutocomplete from "./AccessibleAutocomplete";

const PlacesSearch = () => {
  const [places, setPlaces] = useState({
    current: PlaceDefault,
    history: [],
    handleChangePlace
  });

  return (
    <PlacesProvider value={places}>
      {/* TODO: Add header */}
      <AccessibleAutocomplete />
    </PlacesProvider>
  );

  function handleChangePlace(placeResult) {
    const place = transformPlace(placeResult);
    setPlaces({ current: place });
  }
};

export default PlacesSearch;
