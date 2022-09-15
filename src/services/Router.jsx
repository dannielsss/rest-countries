import React from 'react'
import { Route, Routes } from 'react-router-dom'

import App from '../App';
import Home from '../views/Home';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router;