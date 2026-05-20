import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";

const ProtectedRoute = () => {
	const { isLoggedIn, authLoading } = useContext(AuthContext);

	if (authLoading) {
		return (
			<div className="h-screen w-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
				<Loader message="Verifying security tokens..." />
			</div>
		);
	}

	// Evaluate structural authorization context access mapping flags
	return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
