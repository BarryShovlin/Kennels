
import React from "react";
import "./Animal.css";


export const AnimalCard = ({animal, owner, location}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">{location.name}</div>
        <div className="animal__owner">{owner.name}</div>
    </section>
);