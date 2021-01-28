
import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useHistory, useParams } from "react-router-dom"


export const LocationForm = () => {
    const { addLocation, getLocationById, updateLocation, getLocations } = useContext(LocationContext)

    const [ location, setLocation] = useState({
        name: "",
        address: ""
    })

    const history = useHistory()

    // useEfffect(() => {
    //     getLocations()
    // }, [])
    const [isLoading, setIsLoading] = useState(true)
    const { locationId }= useParams()

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        newLocation[event.target.id] = event.target.value
        setLocation(newLocation)
    }
    
    const handleClickSaveLocation = () => {
        setIsLoading(true);
        if (locationId) {
            updateLocation({
                id: location.id,
                name: location.name,
                address: location.address
            })
            .then(() => history.push(`/locations/detail/${location.id}`))
        } else {
            addLocation({
                name: location.name,
                address: location.address
            })
            .then(() => history.push("/locations"))
        }
    }
    useEffect(() => {
        getLocations().then(() => {
            if (locationId) {
                getLocationById(locationId)
                .then(lcoation => {
                    setLocation(location)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleClickSaveLocation()
            }}>
               {locationId ? "Save Location" : "Add Location"}</button>
        </form>
    )
}