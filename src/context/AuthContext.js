import React, { createContext, useState, useEffect, useCallback } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [authLoading, setAuthLoading] = useState(true);

	// Synchronize internal state with storage layer on initial build execution
	useEffect(() => {
		const savedSession = localStorage.getItem("active_session");
		const registeredUsers = localStorage.getItem("users_database");

		if (savedSession) {
			const activeUser = JSON.parse(savedSession);
			setUser(activeUser);
			setIsLoggedIn(true);
		}
		if (!registeredUsers) {
			// Seed an empty registry database array if non-existent
			localStorage.setItem("users_database", JSON.stringify([]));
		}
		setAuthLoading(false);
	}, []);

	// Action: Register User Account Profile
	const signup = useCallback((username, email, password) => {
		const users = JSON.parse(localStorage.getItem("users_database") || "[]");

		// Safety check for duplication hazards
		const userExists = users.some((u) => u.email === email);
		if (userExists) {
			return {
				success: false,
				message: "Account registry matches a registered email identity",
			};
		}

		const newUser = { id: Date.now(), username, email, password };
		users.push(newUser);
		localStorage.setItem("users_database", JSON.stringify(users));
		return {
			success: true,
			message: "Account profile provisioned successfully",
		};
	}, []);

	// Action: Authenticate Session Request
	const login = useCallback((email, password) => {
		const users = JSON.parse(localStorage.getItem("users_database") || "[]");
		const verifiedAccount = users.find(
			(u) => u.email === email && u.password === password,
		);

		if (verifiedAccount) {
			const sessionPayload = {
				username: verifiedAccount.username,
				email: verifiedAccount.email,
			};
			localStorage.setItem("active_session", JSON.stringify(sessionPayload));
			setUser(sessionPayload);
			setIsLoggedIn(true);
			return { success: true };
		}
		return {
			success: false,
			message: "Invalid access credentials verification profile",
		};
	}, []);

	// Action: Terminate Session Lifecycle
	const logout = useCallback(() => {
		localStorage.removeItem("active_session");
		setUser(null);
		setIsLoggedIn(false);
	}, []);

	const providerValues = React.useMemo(
		() => ({
			user,
			isLoggedIn,
			authLoading,
			signup,
			login,
			logout,
		}),
		[user, isLoggedIn, authLoading, signup, login, logout],
	);

	return (
		<AuthContext.Provider value={providerValues}>
			{!authLoading && children}
		</AuthContext.Provider>
	);
};
