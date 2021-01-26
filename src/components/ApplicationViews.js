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
import { EmployeeForm } from "./Employees/EmployeeForm"
import { LocationList } from "./Locations/LocationList";
import { LocationForm } from "./Locations/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"


export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <AnimalProvider>
        <Route exact path="/animals/detail/:animalId(\d+)">
          <AnimalDetail />
        </Route>
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
        <LocationProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>
        <Route exact path="/employees/create">
          <EmployeeForm />
        </Route>
        </LocationProvider>
      </EmployeeProvider>

      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
        <Route exact path="/locations/create">
          <LocationForm />
        </Route>
      </LocationProvider>
    </>
      );
    };