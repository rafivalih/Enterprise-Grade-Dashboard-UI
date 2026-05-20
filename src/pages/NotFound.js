import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center px-4 text-center">
			<div className="space-y-4 max-w-md">
				<div className="text-6xl font-black text-indigo-600 dark:text-indigo-500 tracking-tighter animate-bounce">
					404
				</div>
				<h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white md:text-3xl">
					Structural Router Drift Anomaly
				</h2>
				<p className="text-sm font-medium text-slate-400 dark:text-slate-500">
					The routing structural segment resource key pointer descriptor
					reference addresses a null space inside our configuration manifest
					maps.
				</p>
				<div className="pt-4">
					<Link
						to="/dashboard"
						className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-indigo-500/10 active:scale-[0.98] pt-3.5"
					>
						Re-anchor Operational Route Location Context
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
