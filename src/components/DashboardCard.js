import React from "react";


const DashboardCard = ({ title, value, change, icon, trendUp }) => {
	return (
		<div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between">
			<div className="space-y-2">
				<span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
					{title}
				</span>
				<h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">
					{value}
				</h3>
				<span
					className={`inline-flex items-center text-xs font-semibold ${trendUp ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}
				>
					{trendUp ? (
						<svg
							className="w-3.5 h-3.5 mr-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="3"
								d="M5 10l7-7m0 0l7 7m-7-7v18"
							/>
						</svg>
					) : (
						<svg
							className="w-3.5 h-3.5 mr-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="3"
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					)}
					{change}{" "}
					<span className="text-slate-400 dark:text-slate-500 font-normal ml-1">
						vs last month
					</span>
				</span>
			</div>
			<div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
				{icon}
			</div>
            
		</div>
        
	);
};

export default React.memo(DashboardCard);
