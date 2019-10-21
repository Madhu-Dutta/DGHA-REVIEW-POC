import React, { useContext } from "react";
import { AccessibleGooglePlacesAutocomplete } from "accessible-google-places-autocomplete";
import { PlacesContext } from "../../State/Places";

const apikey = process.env.REACT_APP_PLACES_APIKEY;

const AccessibleAutocomplete = props => {
  const places = useContext(PlacesContext);

  return (
    <AccessibleGooglePlacesAutocomplete
      id="address_input"
      googlePlacesApiKey={apikey}
      onConfirm={places.handleChangePlace}
    />
  );
};

export default AccessibleAutocomplete;
