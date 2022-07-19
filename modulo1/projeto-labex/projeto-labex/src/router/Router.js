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
          <Route path="/trips/list" element={<ListTrips/>}/>
          <Route path="/trips/application" element={<ApplicationForm/>}/>
          <Route path="/login" element={<LoginAdmin/>}/>
          <Route path="/admin/trips/list" element={<AdminHome/>}/>
          <Route path="/admin/trips/:id" element={<TripDetails/>}/>
          <Route path="/admin/trips/create" element={<CreateTrip/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;