import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

export default function LoggedInRedirect({ children }) {
  const AuthData = useContext(AuthContext);
  const { user } = AuthData;
  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
