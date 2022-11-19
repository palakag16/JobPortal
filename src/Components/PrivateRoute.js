import { Navigate } from 'react-router-dom';
import { getToken } from '../Shared/Service';

export { PrivateRoute };

function PrivateRoute({ children }) {
    const authUser = getToken(); 
    if (!authUser) {
        return <Navigate to="/login"/>
    }

    return children;
}
