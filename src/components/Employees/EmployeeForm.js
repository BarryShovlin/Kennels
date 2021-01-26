import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../Locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const { addEmployee } = useContext(EmployeeContext)
    const history = useHistory()

    const [employee, setEmployees] = useState({
        name: "",
        locationId: 0
    })


    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        newEmployee[event.target.id] = event.target.value
        setEmployees(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const locationId = parseInt(employee.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee(employee)
            .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location:</label>
                    <select defaultValue={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control">
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                        </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
                Save Employee
            </button>
        </form>
    )
}

