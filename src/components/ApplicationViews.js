import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./Customers/CustomerProvider";
import { EmployeeProvider } from "./Employees/EmployeeProvider";
import { LocationProvider } from "./Locations/LocationProvider";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerList } from "./Customers/CustomerList";
import { EmployeeList } from "./Employees/EmployeeList";
import { LocationList } from "./Locations/LocationList";


export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <AnimalProvider>
  <LocationProvider>
    <CustomerProvider>
      <Route exact path="/animals">
        <AnimalList />
      </Route>

      <Route path="/animals/create">
        <AnimalForm />
      </Route>
    </CustomerProvider>
  </LocationProvider>
</AnimalProvider>

      <CustomerProvider>
        <Route path="/customers">
        <h2>Customers</h2>
          <article className="customers">
            <CustomerList />
          </article>
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route exact path="/employees">
        <h2>Employees</h2>
          <article className="employees">
          <EmployeeList />
          </article>
        </Route>
      </EmployeeProvider>

      <LocationProvider>
        <Route path="/locations">
        <h2>Locations</h2>
          <article className="locations">
          <LocationList />
        </article> 
        </Route>
      </LocationProvider>
    </>
      );
    };