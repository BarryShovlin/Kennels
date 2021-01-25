  
import React from "react";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

import "./Kennel.css";
import "./animal/Animal.css";
import "./Customers/Customer.css";
import "./Employees/Employee.css";
import "./Locations/Location.css";


export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
);