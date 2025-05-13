import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const PublicRoutes = ({ children }) => {
  const { isLogged } = useAuthContext();

  return !isLogged ? children : <Navigate to="/" />;
};

export default PublicRoutes;
