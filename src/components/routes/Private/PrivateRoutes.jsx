import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { isLogged } = useAuthContext();

  return isLogged ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
