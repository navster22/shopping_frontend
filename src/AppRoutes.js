import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import HomepageLayout from './layouts/HomepageLayout';

export default function AppRoutes() {
  return (
    <Routes>
          <Route path='/' element={<HomepageLayout />}>
            <Route index element={<Home/>} />
          </Route>
    </Routes>
  );
}
