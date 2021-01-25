import React from "react";
import "./Employee.css";

export const EmployeeCard = (props) => (
    <section className="employee">
        <h3 className="Employee__name">{props.employee.name}</h3>
        <div className="Employee__work">{props.employee.location.name}</div>
    </section>
);