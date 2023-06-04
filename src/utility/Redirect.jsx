/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Redirect({ children }) {
  const AuthData = useContext(AuthContext);
  const { user } = AuthData;
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
