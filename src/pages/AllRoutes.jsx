import React from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Auth from "../middlewares/Auth";
import ApplyPage from "./ApplyPage";
import SuccessPage from "./SuccessPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route
        path={"/"}
        element={
          <Auth>
            <HomePage />
          </Auth>
        }
      />
      <Route
        path={"/apply"}
        element={
          <Auth>
            <ApplyPage />
          </Auth>
        }
      />
        <Route
        path={"/apply/success"}
        element={
          <Auth>
            <SuccessPage />
          </Auth>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
