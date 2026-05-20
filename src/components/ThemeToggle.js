// import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// const ThemeToggle = () => {
// 	const { isDarkMode, toggleTheme } = useContext(ThemeContext);

// 	return (
// 		<button
// 			onClick={toggleTheme}
// 			type="button"
// 			className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
// 			aria-label="Toggle runtime UI design mode"
// 		>
// 			{isDarkMode ? (
// 				<svg
// 					className="w-5 h-5"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="2"
// 						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
// 					/>
// 				</svg>
// 			) : (
// 				<svg
// 					className="w-5 h-5"
// 					fill="none"
// 					stroke="currentColor"
// 					viewBox="0 0 24 24"
// 				>
// 					<path
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						strokeWidth="2"
// 						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
// 					/>
// 				</svg>
// 			)}
// 		</button>
// 	);
// };

// export default ThemeToggle;

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);

	return (
		<button
			onClick={toggleTheme}
			type="button"
			className="p-2.5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 
                       bg-slate-200 text-slate-800 hover:text-indigo-600
                       dark:bg-slate-800 dark:text-slate-200 dark:hover:text-indigo-400"
			aria-label="Toggle runtime UI design mode"
		>
			{isDarkMode ? (
				/* Show Moon icon when in Dark Mode to represent the night state */
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			) : (
				/* Show Sun icon when in Light Mode */
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
					/>
				</svg>
			)}
		</button>
	);
};

export default ThemeToggle;
