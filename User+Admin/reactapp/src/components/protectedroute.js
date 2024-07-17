
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
const PR = ({ children, requiredRole}) => {
    const token = localStorage.getItem('token');
    if (token) {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
            if(decoded.stat !== requiredRole){
                const c = window.confirm("You are trying to access unauthorized pages, do you wan to sign using authorized id?");
                if(c){
                    localStorage.removeItem('token');
                    return <Navigate to="/signin" />;
                }else{
                  window.history.back();
                  return null;
                }
            }
            else {return children;}
        } else {
            localStorage.removeItem('token');
            alert('Session Expired, Please sign in first');
            return <Navigate to="/signin" />;
        }
    }else{
        return <Navigate to = "/signin"/>
    }
};

export default PR;
