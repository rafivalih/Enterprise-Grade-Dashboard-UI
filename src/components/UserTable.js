import React from "react";

const UserTable = ({ users }) => {
	if (users.length === 0) {
		return (
			<div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
				<span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
					No records matched your filtration query parameters.
				</span>
			</div>
		);
	}

	return (
		<div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
			<div className="overflow-x-auto w-full">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xxs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
							<th className="px-6 py-4 font-bold">ID</th>
							<th className="px-6 py-4 font-bold">Identity Profile</th>
							<th className="px-6 py-4 font-bold">Designation Title</th>
							<th className="px-6 py-4 font-bold">Age Allocation</th>
							<th className="px-6 py-4 font-bold">Electronic Mail Address</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-sm text-slate-600 dark:text-slate-300">
						{users.map((item) => (
							<tr
								key={item.id}
								className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors duration-150 group"
							>
								<td className="px-6 py-4 font-semibold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 transition-colors">
									#{item.id}
								</td>
								<td className="px-6 py-4">
									<div className="flex items-center space-x-3">
										<div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center">
											{item.name.charAt(0)}
										</div>
										<span className="font-bold text-slate-800 dark:text-white tracking-tight">
											{item.name}
										</span>
									</div>
								</td>
								<td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-400">
									{item.title}
								</td>
								<td className="px-6 py-4">
									<span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
										{item.age} yrs
									</span>
								</td>
								<td className="px-6 py-4 font-mono text-xs tracking-tight text-slate-500 dark:text-slate-400">
									{item.email}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default React.memo(UserTable);
