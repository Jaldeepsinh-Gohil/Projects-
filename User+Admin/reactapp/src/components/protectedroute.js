import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './auth';

const PR = ({ children, requiredRole }) => {
    const { isAuthenticated, role } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }

    if (requiredRole && role !== requiredRole) {
        return <Navigate to="/signin" />;
    }

    return children;
};

export default PR;
