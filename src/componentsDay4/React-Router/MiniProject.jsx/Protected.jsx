import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ isLogin, children }) => {
  return <div>{isLogin ? children : <Navigate to="/login" replace />}</div>;
};

export default Protected;
