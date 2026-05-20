import React from "react";

const UserCard = ({ user }) => {
	return (
		<div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between group hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all duration-300">
			<div className="flex items-start justify-between">
				<div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/40 dark:border-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
					{user.name.charAt(0)}
				</div>
				<span className="text-xxs font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 tracking-wide">
					ID: #{user.id}
				</span>
			</div>

			<div className="mt-4 space-y-1">
				<h4 className="text-base font-bold text-slate-800 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
					{user.name}
				</h4>
				<p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
					{user.title}
				</p>
			</div>

			<div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
				<div className="flex items-center space-x-2">
					<svg
						className="w-4 h-4 text-slate-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					<span className="truncate">{user.email}</span>
				</div>
				<div className="flex items-center space-x-2">
					<svg
						className="w-4 h-4 text-slate-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>
						Age:{" "}
						<strong className="text-slate-700 dark:text-slate-300 font-bold">
							{user.age} yrs
						</strong>
					</span>
				</div>
			</div>
		</div>
	);
};

export default React.memo(UserCard);
