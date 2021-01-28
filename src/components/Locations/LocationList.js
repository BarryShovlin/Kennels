import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./Location";
import "./Location.css";
import { useHistory } from "react-router-dom"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();

  }, []);
  const history = useHistory()


  return (
    <>
      <div className="locations">
        <h2>Locations</h2>

        <button onClick={() => { history.push("/locations/create") }}>
          Add a Location
    </button>

        {
          locations.map(location => {
            return <LocationCard key={location.id} location={location} />
          })
        }
      </div>
    </>
  )
};