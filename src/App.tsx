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
  const fetchImages = async () => {
    const iamgeResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const images = await iamgeResponse.json();
    console.log(images);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="sign-up" element={<RegisterPage />} />
        <Route path="simulation" element={<SimulationPage />} />
        <Route path="category" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
};

export default App;
