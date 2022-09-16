import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from '../App';
import ErrorNotFound from '../components/ErrorNotFound';
import Country from '../views/Country';
import Home from '../views/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='country/:countryId' element={<Country />} />
        
        <Route path="*" element={<ErrorNotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
