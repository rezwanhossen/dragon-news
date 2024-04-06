import { useContext } from "react";
import { AuthContexts } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, lodding } = useContext(AuthContexts);
  const location = useLocation();
  //   console.log(location.pathname);
  if (lodding) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRout;
