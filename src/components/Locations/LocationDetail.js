import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById, deleteLocation } = useContext(LocationContext)

        const [location, setLocation] = useState({})
        const {locationId} = useParams()
        const history = useHistory()

        const handleDelete = () => {
            deleteLocation(location.id)
            .then(() => {
                history.push("/locations")
            })
        }

        const nameFunction = (array) => {
            if (array) {
            return array.map(obj => obj.name).join(", ")
            }
          };
          const animalNames = nameFunction(location.animals);
          const employeeNames = nameFunction(location.employees);

    useEffect(() => { 
        getLocationById(locationId)
        .then((response) => {
            setLocation(response)
        })
    }, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <div className="location__adnimals">Current Residents: {animalNames}</div>
            <div className="location__employees">Employees: {employeeNames}</div>
            <button onClick={handleDelete}>Delete Location</button>
            <button onClick={() => {
                history.push(`/locations/edit/${location.id}`)
            }}>Edit</button>
        </section>
    )
}