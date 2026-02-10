import React from "react";
import { use } from "react";
import AuthContext from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);
	const location = useLocation();
	console.log(location.pathname);

	if (loading) {
		return <progress className="progress flex justify-center items-center progress-primary w-full"></progress>;
	}

	if (!user) {
		return <Navigate to="/signIn" state={location.pathname}></Navigate>;
	}

	return children;
};

export default PrivateRoute;
