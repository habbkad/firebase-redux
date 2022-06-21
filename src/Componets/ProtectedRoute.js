import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";
const ProtectedRoute = () => {
  const login = useSelector((state) => state.auth);
  if (login === false) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return (
    <div>
      <Navigate to={"/home"} replace={true} />
    </div>
  );
};

export default ProtectedRoute;
