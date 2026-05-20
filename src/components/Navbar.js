import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ onToggleSidebar }) => {
	const { user, logout } = useContext(AuthContext);

	return (
		<nav className="sticky top-0 z-40 w-full h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 flex items-center justify-between">
			<div className="flex items-center space-x-3">
				{/* Toggle button for collapsible sidebar view states */}
				<button
					onClick={onToggleSidebar}
					className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none lg:hidden"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				<div className="hidden sm:block">
					<span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block">
						Runtime Panel
					</span>
					<h1 className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">
						Enterprise-Grade Dashboard UI
					</h1>
				</div>
			</div>

			<div className="flex items-center space-x-4">
				<ThemeToggle />

				<div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800"></div>

				{/* <div className="flex items-center space-x-3">
					<div className="flex flex-col text-right hidden md:block">
						<span className="text-sm font-semibold text-slate-700 dark:text-slate-200 pr-2">
							Welcome, {user?.username || "Operator"}
						</span>
						<span className="text-xs font-medium text-slate-400 dark:text-slate-500">
							{user?.email}
						</span>
					</div>
					<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/20">
						{user?.username
							? user.username.substring(0, 2).toUpperCase()
							: "OP"}
					</div>
					<button
						onClick={logout}
						className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
						title="Terminate operational authorization access session"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</button>
				</div> */}
				<div className="flex items-center space-x-1">
					<div className="flex flex-col text-right hidden md:block">
						<span className="text-sm font-semibold text-slate-700 dark:text-slate-200 pr-2">
							Welcome, {user?.username || "Operator"}
						</span>
					</div>

					<div className="relative group">
						<div className="w-10 h-10 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm\ shadow-md shadow-indigo-500/20 cursor-pointer  ">
							{user?.username
								? user.username.substring(0, 2).toUpperCase()
								: "OP"}
						</div>

						{/* Hover Email Tooltip */}
						<div className="absolute right-0 mt-2 hidden group-hover:block bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-50">
							{user?.email || "No Email"}
						</div>
					</div>

					<div className="relative group">
						<button
							onClick={logout}
							className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
								/>
							</svg>
						</button>

						<div className="absolute right-0 mt-2 hidden group-hover:block bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-50">
							Logout
						</div>
					</div>
					{/* <button
						onClick={logout}
						className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
						title="Logout"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</button> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
// Optimized using manual validation strategy context layer maps
