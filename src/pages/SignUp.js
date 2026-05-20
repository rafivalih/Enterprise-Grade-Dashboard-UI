import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "../components/ThemeToggle";
import { CircleUser } from "lucide-react";

const SignUp = () => {
	const { signup } = useContext(AuthContext);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errorMsg) setErrorMsg("");
	};

	const executeRegistration = (e) => {
		e.preventDefault();
		const { username, email, password, confirmPassword } = formData;

		if (!username.trim() || !email.trim() || !password || !confirmPassword) {
			setErrorMsg("All mandatory verification input data matrices required");
			return;
		}
		if (password !== confirmPassword) {
			setErrorMsg("Password confirmation mapping parity failure detected");
			return;
		}
		if (password.length < 6) {
			setErrorMsg(
				"Security phrase requirement thresholds require minimum length of 6 structural elements",
			);
			return;
		}

		const verificationResult = signup(username.trim(), email.trim(), password);
		if (verificationResult.success) {
			setSuccessMsg(
				"Profile allocation successful! Redirecting to credentials gateway...",
			);
			setTimeout(() => navigate("/login"), 2000);
		} else {
			setErrorMsg(verificationResult.message);
		}
	};

	return (
		// <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center px-4 relative">
		<div className="w-full max-w-md rounded-3xl p-8 border transition-all duration-300 bg-slate-50 text-slate-900 border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none space-y-6">
			<div className="absolute top-6 right-6">
				<ThemeToggle />
			</div>

			<div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none space-y-6">
				<div className="text-center space-y-2">
					{/* <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black mx-auto shadow-lg shadow-indigo-500/20 text-xl">
						S
					</div> */}
					<h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white">
						Sign-Up
					</h2>
					<p className="text-sm font-medium text-slate-400 dark:text-slate-500">
						Sign up to provision a secure dashboard operational system instance
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

				{successMsg && (
					<div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-semibold flex items-center space-x-2">
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
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>{successMsg}</span>
					</div>
				)}

				<form onSubmit={executeRegistration} className="space-y-4">
					<div className="space-y-1">
						<label className="text-sm font-bold text-slate-500 dark:text-slate-400  tracking-wider block">
							Username
						</label>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={handleInputChange}
							className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white font-medium text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
							placeholder="e.g., Rafivali"
						/>
					</div>

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
						<label className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-wider block">
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

					<div className="space-y-1">
						<label className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-wider block">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleInputChange}
							className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white font-medium text-sm placeholder-•••••••• focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
							placeholder="••••••••"
						/>
					</div>

					<button
						type="submit"
						className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98] transition-all pt-3.5"
					>
						Sign-up
					</button>
				</form>

				<div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />

				<p className="text-xs font-medium text-slate-400 dark:text-slate-500 text-center flex justify-center items-center">
					Already have Account?{" "}
					<Link
						to="/login"
						className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
					>
						<span className=" flex justify-center items-center p-[4px]">
							{" "}
							Login <CircleUser className="mx-[2px]" />
						</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
