// import React, { useState, useContext, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import ThemeToggle from "../components/ThemeToggle";

// const LoginPage = () => {
// 	const { login, isLoggedIn } = useContext(AuthContext);
// 	const navigate = useNavigate();

// 	const [formData, setFormData] = useState({ email: "", password: "" });
// 	const [errorMsg, setErrorMsg] = useState("");

// 	useEffect(() => {
// 		if (isLoggedIn) {
// 			navigate("/dashboard", { replace: true });
// 		}
// 	}, [isLoggedIn, navigate]);

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({ ...prev, [name]: value }));
// 		if (errorMsg) setErrorMsg("");
// 	};

// 	const executeAuthentication = (e) => {
// 		e.preventDefault();
// 		const { email, password } = formData;

// 		if (!email.trim() || !password) {
// 			setErrorMsg(
// 				"Mandatory access operational validation fields cannot resolve empty values",
// 			);
// 			return;
// 		}

// 		const verificationResult = login(email.trim(), password);
// 		if (verificationResult.success) {
// 			navigate("/dashboard");
// 		} else {
// 			setErrorMsg(verificationResult.message);
// 		}
// 	};

// 	return (
// 		<div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center px-4 relative">
// 			<div className="absolute top-6 right-6">
// 				<ThemeToggle />
// 			</div>

// 			<div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none space-y-6">
// 				<div className="text-center space-y-2">
// 					<div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black mx-auto shadow-lg shadow-indigo-500/20 text-xl">
// 						S
// 					</div>
// 					<h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white">
// 						Login
// 					</h2>
// 					<p className="text-sm font-medium text-slate-400 dark:text-slate-500">
// 						Provide token credentials verified by localStorage cluster
// 						registries
// 					</p>
// 				</div>

// 				{errorMsg && (
// 					<div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl text-xs font-semibold flex items-center space-x-2">
// 						<svg
// 							className="w-4 h-4 shrink-0"
// 							fill="none"
// 							stroke="currentColor"
// 							viewBox="0 0 24 24"
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								strokeWidth="2"
// 								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
// 							/>
// 						</svg>
// 						<span>{errorMsg}</span>
// 					</div>
// 				)}

// 				<form onSubmit={executeAuthentication} className="space-y-4">
// 					<div className="space-y-1">
// 						<label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
// 							Email
// 						</label>
// 						<input
// 							type="email"
// 							name="email"
// 							value={formData.email}
// 							onChange={handleInputChange}
// 							className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white font-medium text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
// 							placeholder="rafi@gmail.com"
// 						/>
// 					</div>

// 					<div className="space-y-1">
// 						<label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
// 							Password
// 						</label>
// 						<input
// 							type="password"
// 							name="password"
// 							value={formData.password}
// 							onChange={handleInputChange}
// 							className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white font-medium text-sm placeholder-•••••••• focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
// 							placeholder="••••••••"
// 						/>
// 					</div>

// 					<button
// 						type="submit"
// 						className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98] transition-all pt-3.5"
// 					>
// 						Login
// 					</button>
// 				</form>

// 				<div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />

// 				<p className="text-xs font-medium text-slate-400 dark:text-slate-500 text-center">
// 					Don't have Account?{" "}
// 					<Link
// 						to="/signup"
// 						className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
// 					>
// 						Sign-UP
// 					</Link>
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default LoginPage;

import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "../components/ThemeToggle";
import { CircleUser } from "lucide-react";

const LoginPage = () => {
	const { login, isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({ email: "", password: "" });
	const [errorMsg, setErrorMsg] = useState("");

	useEffect(() => {
		if (isLoggedIn) {
			navigate("/dashboard", { replace: true });
		}
	}, [isLoggedIn, navigate]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errorMsg) setErrorMsg("");
	};

	const executeAuthentication = (e) => {
		e.preventDefault();
		const { email, password } = formData;

		if (!email.trim() || !password) {
			setErrorMsg(
				"Mandatory access operational validation fields cannot resolve empty values",
			);
			return;
		}

		const usersDatabase = JSON.parse(
			localStorage.getItem("users_database") || "[]",
		);
		const targetedUser = usersDatabase.find(
			(u) => u.email === email.trim() && u.password === password,
		);

		// Process the official global login authentication context state sequence
		const verificationResult = login(email.trim(), password);

		if (verificationResult.success && targetedUser) {
			// Determine if this user is the very first entry in the database array
			const isFirstCandidate =
				usersDatabase.length > 0 &&
				usersDatabase[0].email === targetedUser.email;

			//   navigate('/dashboard', {
			//     state: {
			//       triggerAlert: true,
			//       isFirst: isFirstCandidate,
			//       candidateName: targetedUser.username
			//     }
			//   });
			navigate("/dashboard", {
				state: {
					triggerAlert: true,
					isFirst: isFirstCandidate,
					candidateName: targetedUser.username,
				},
			});
		} else {
			setErrorMsg(
				verificationResult.message ||
					"Invalid access credentials verification profile",
			);
		}
	};

	return (
		// <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center px-4 relative">
        <div className="min-h-screen w-full transition-colors duration-300 ease-in-out bg-white text-slate-900 dark:bg-slate-950 dark:text-white flex flex-col justify-center items-center px-4 relative">
			<div className="absolute top-6 right-6">
				<ThemeToggle />
			</div>

			<div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none space-y-6">
				<div className="text-center space-y-2">
					{/* <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black mx-auto shadow-lg shadow-indigo-500/20 text-xl">S</div> */}
					<h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white">
						Login
					</h2>
					<p className="text-sm font-medium text-slate-400 dark:text-slate-500">
						Provide token credentials verified by localStorage cluster
						registries
					</p>
				</div>

				{errorMsg && (
					<div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl text-xs font-semibold flex items-center space-x-2">
						<svg
							className="w-4 h-4 shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
						<span>{errorMsg}</span>
					</div>
				)}

				<form onSubmit={executeAuthentication} className="space-y-4">
					<div className="space-y-1">
						<label className="text-sm font-bold text-slate-500 dark:text-slate-400  tracking-wider block">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white font-medium text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
							placeholder="rafi@gmail.com"
						/>
					</div>

					<div className="space-y-1">
						<label className="text-sm font-bold text-slate-500 dark:text-slate-400  tracking-wider block">
							Password
						</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleInputChange}
							className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white font-medium text-sm placeholder-•••••••• focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
							placeholder="••••••••"
						/>
					</div>

					<button
						type="submit"
						className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98] transition-all pt-3.5"
					>
						Login
					</button>
				</form>

				<div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />

				<p className="text-xs font-medium text-slate-400 dark:text-slate-500 text-center flex justify-center items-center">
					Don't have Account?{" "}
					<Link
						to="/signup"
						className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
					>
						<span className=" flex justify-center items-center p-[4px]">
							{" "}
							SignUp <CircleUser className="mx-[2px]" />
						</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
