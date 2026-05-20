import React, { createContext, useState, useEffect, useCallback } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		// Persistent theme preference evaluation
		const storedTheme = localStorage.getItem("ui_theme_preference");
		if (storedTheme) return storedTheme;

		// Fallback assessment against native ecosystem query params
		const systemMatch = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		return systemMatch ? "dark" : "light";
	});

	// useEffect(() => {
	// 	const DOMRootElement = window.document.documentElement;
	// 	if (theme === "dark") {
	// 		DOMRootElement.classList.add("dark");
	// 	} else {
	// 		DOMRootElement.classList.remove("dark");
	// 	}
	// 	localStorage.setItem("ui_theme_preference", theme);
	// }, [theme]);

	useEffect(() => {
		const DOMRootElement = window.document.documentElement;

		DOMRootElement.setAttribute("data-theme", theme);

		if (theme === "dark") {
			DOMRootElement.classList.add("dark");
		} else {
			DOMRootElement.classList.remove("dark");
		}

		localStorage.setItem("ui_theme_preference", theme);
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}, []);

	const valuePayload = React.useMemo(
		() => ({
			theme,
			toggleTheme,
			isDarkMode: theme === "dark",
		}),
		[theme, toggleTheme],
	);

	return (
		<ThemeContext.Provider value={valuePayload}>
			{children}
		</ThemeContext.Provider>
	);
};
