import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('userSession') ? true : false;
};

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

export default PrivateRoute;
