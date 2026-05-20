import React from "react";

const Loader = ({ message = "Loading execution pipeline..." }) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 p-8 w-full">
			<div className="relative w-12 h-12">
				<div className="w-12 h-12 rounded-full absolute border-4 border-solid border-slate-200 dark:border-slate-700"></div>
				<div className="w-12 h-12 rounded-full absolute border-4 border-solid border-indigo-600 border-t-transparent animate-spin"></div>
			</div>
			<p className="text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wide animate-pulse">
				{message}
			</p>
		</div>
	);
};

export default Loader;
