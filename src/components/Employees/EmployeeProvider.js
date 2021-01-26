
import React, { useState, createContext } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    };

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    };

    const getAnimalById = (id) => {
        return fetch('http://localhost:8088/animals/${id}?_expand=location$_expand=customer')
        .then(res => res.json())
    }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee, getAnimalById
        }}>
            {props.children}
        </EmployeeContext.Provider>
    );
};