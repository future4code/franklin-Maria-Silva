import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { AdminHome } from '../pages/AdminHomePage';
import { ApplicationForm } from '../pages/ApplicationFormPage';
import { CreateTrip } from '../pages/CreateTripPage';
import { HomePage } from '../pages/HomePage';
import { ListTrips } from '../pages/ListTripsPage';
import { LoginAdmin } from '../pages/LoginPage';
import { TripDetails } from '../pages/TripDetailsPage';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="listtrips/" element={<ListTrips/>}/>
          <Route path="applicationform/" element={<ApplicationForm/>}/>
          <Route path="loginadmin/" element={<LoginAdmin/>}/>
          <Route path="adminhome/" element={<AdminHome/>}/>
          <Route path="tripdetails/" element={<TripDetails/>}/>
          <Route path="createtrip/" element={<CreateTrip/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;