/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  const AuthData = useContext(AuthContext);
  const { user } = AuthData;
  if (user) {
    return children;
  } else {
    toastr.error("You have to log in first to view details");
    return <Navigate to="/login" state={location.pathname} />;
  }
}
