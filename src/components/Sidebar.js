import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
	return (
		<>
			{/* Mobile background backdrop dynamic display overlay panel mask */}
			{isOpen && (
				<div
					className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
					onClick={onClose}
				/>
			)}

			<aside
				className={`fixed top-0 bottom-0 left-0 z-50 w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transform lg:transform-none lg:opacity-100 transition-all duration-300 ease-in-out flex flex-col justify-between ${
					isOpen
						? "translate-x-0 opacity-100"
						: "-translate-x-full lg:translate-x-0"
				}`}
			>
				<div className="space-y-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2.5">
							{/* <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black tracking-tighter shadow-md">
								S
							</div> */}
							<span className="text-xl font-black tracking-tight text-slate-800 dark:text-white mx-10">
								Dashboard
							</span>
						</div>
						<button
							onClick={onClose}
							className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden text-slate-500"
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
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<div className="h-[1px] bg-slate-200 dark:bg-slate-800 w-full" />

					<nav className="space-y-1">
						<a
							href="#dashboard"
							className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold transition-all"
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
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"
								/>
							</svg>
							<span>Main Dashboard</span>
						</a>

						<div className="pt-4 pb-2 px-4 text-xxs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">
							Systems Core
						</div>

						<a
							href="#analytics"
							className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-medium transition-all group"
						>
							<svg
								className="w-5 h-5 text-slate-400 group-hover:text-indigo-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
								/>
							</svg>
							<span>Metrics & Telemetry</span>
						</a>
					</nav>
				</div>

				<div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 text-center border border-slate-100 dark:border-slate-800">
					<span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
						System Environment
					</span>
					<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400">
						<span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
						Production Mode
					</span>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
