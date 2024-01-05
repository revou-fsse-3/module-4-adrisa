import {
  SimulationPage,
  CategoryPage,
  HomePage,
  LoginPage,
  Navigation,
  RegisterPage,
} from "./router";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />
        <Route path="simulation" element={<SimulationPage />} />
        <Route path="category" element={<CategoryPage />}>
          {/* <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
