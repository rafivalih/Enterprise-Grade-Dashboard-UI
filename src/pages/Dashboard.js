import React, { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import UserCard from "../components/UserCard";
import UserTable from "../components/UserTable";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const Dashboard = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [apiData, setApiData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// States handling real-time interactive user metrics criteria
	const [searchQuery, setSearchQuery] = useState("");
	const [ageFilter, setAgeFilter] = useState("ALL");

	const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);
	const closeSidebar = useCallback(() => setSidebarOpen(false), []);

	// Structural fetch routine processing context
	useEffect(() => {
		const fetchDashboardTelemetry = async () => {
			try {
				setLoading(true);
				const endpointResponse = await fetch("/data.json");
				if (!endpointResponse.ok) {
					throw new Error(
						`Data synchronization pipeline degradation status: ${endpointResponse.status}`,
					);
				}
				const dataPayload = await endpointResponse.json();
				setApiData(dataPayload);
				setError(null);
			} catch (err) {
				setError(
					err.message || "Fatal data stream acquisition anomaly encountered.",
				);
			} finally {
				setLoading(false);
			}
		};

		fetchDashboardTelemetry();
	}, []);

	// Performance Hook optimization processing inputs
	const handleSearchChange = useCallback((e) => {
		setSearchQuery(e.target.value);
	}, []);

	const handleFilterChange = useCallback((e) => {
		setAgeFilter(e.target.value);
	}, []);

	// useMemo evaluation loop to handle computation cycles
	const processedUsers = useMemo(() => {
		return apiData.filter((user) => {
			const matchSearch =
				user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				user.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				user.email.toLowerCase().includes(searchQuery.toLowerCase());

			if (ageFilter === "ALL") return matchSearch;
			if (ageFilter === "UNDER_25") return matchSearch && user.age < 25;
			if (ageFilter === "25_PLUS") return matchSearch && user.age >= 25;

			return matchSearch;
		});
	}, [apiData, searchQuery, ageFilter]);

	// Aggregate functional analytical derivations memoization
	const functionalMetrics = useMemo(() => {
		const activeLength = apiData.length;
		const computedTotalAge = apiData.reduce((acc, curr) => acc + curr.age, 0);
		const calculatedMeanAge = activeLength
			? Math.round(computedTotalAge / activeLength)
			: 0;

		return {
			totalUsers: activeLength,
			meanAge: calculatedMeanAge,
			activeNodes: Math.max(0, activeLength - 1),
			operationalIndex: "100%",
		};
	}, [apiData]);

	return (
		// <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
        <div className="min-h-screen transition-colors duration-300 ease-in-out bg-white text-slate-900 dark:bg-slate-950 dark:text-white flex">
			{/* Sidebar Navigation */}
            
			<Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

			{/* Main Container Viewport Panel Layout Area */}
			<div className="flex-1 flex flex-col lg:pl-64 min-w-0">
				<Navbar onToggleSidebar={toggleSidebar} />

				<main className="flex-1 p-4 md:p-8 space-y-8 overflow-y-auto max-w-[1600px] w-full mx-auto">
					{/* Section: Context Operational Performance Headers */}
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<div>
							<h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight md:text-2xl">
								Operational Analytics Hub
							</h2>
							<p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
								Real-time data synchronization feed overview
							</p>
						</div>

						{/* Real-time metrics controls bar wrapper mapping matrix */}
						<div className="flex items-center gap-3 self-start sm:self-center w-full sm:w-auto">
							<div className="relative flex-1 sm:w-64">
								<span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2.5"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</span>
								<input
									type="text"
									value={searchQuery}
									onChange={handleSearchChange}
									placeholder="Filter by context data patterns..."
									className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-xs font-medium focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
								/>
							</div>

							<select
								value={ageFilter}
								onChange={handleFilterChange}
								className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-bold focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
							>
								<option value="ALL">All Age Records</option>
								<option value="UNDER_25">Age Level less than 25</option>
								<option value="25_PLUS">
									Age Level greater than or equal to 25
								</option>
							</select>
						</div>
					</div>

					{/* Condition Pipelines Rendering Controller Context */}
					{loading ? (
						<div className="h-64 flex items-center justify-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
							<Loader message="Synchronizing global system user datastream payloads..." />
						</div>
					) : error ? (
						<div className="p-6 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 rounded-2xl flex items-center space-x-3">
							<svg
								className="w-6 h-6 shrink-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<div>
								<h4 className="font-bold text-sm tracking-tight">
									System Fetch Operation Invariant Degraded
								</h4>
								<p className="text-xs font-medium opacity-90 mt-0.5">{error}</p>
							</div>
						</div>
					) : (
						<>
							{/* Analytics Summary Cards Metrics Grid View */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
								<DashboardCard
									title="Total Synced Users"
									value={functionalMetrics.totalUsers}
									change="+12.3%"
									trendUp={true}
									icon={
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
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									}
								/>
								<DashboardCard
									title="Mean Runtime Age"
									value={`${functionalMetrics.meanAge} yrs`}
									change="-1.4%"
									trendUp={false}
									icon={
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
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									}
								/>
								<DashboardCard
									title="Active Client Clusters"
									value={functionalMetrics.activeNodes}
									change="+4.8%"
									trendUp={true}
									icon={
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
												d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 114 0v2m-4 0h4m-4 0H3m13 0h3m-3 0V5a2 2 0 10-4 0v2m4 0h-4"
											/>
										</svg>
									}
								/>
								<DashboardCard
									title="System Integrity Health"
									value={functionalMetrics.operationalIndex}
									change="0.00%"
									trendUp={true}
									icon={
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
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									}
								/>
							</div>

							{/* Data Display Modalities Sections */}
							<div className="space-y-4">
								<h3 className="text-base font-bold text-slate-800 dark:text-white tracking-tight uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
									Tabular Systems View Integration
								</h3>
								<UserTable users={processedUsers} />
							</div>

							<div className="space-y-4">
								<h3 className="text-base font-bold text-slate-800 dark:text-white tracking-tight uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
									Distributed Micro-Profile Card Nodes
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
									{processedUsers.map((item) => (
										<UserCard key={item.id} user={item} />
									))}
									{processedUsers.length === 0 && (
										<p className="col-span-full text-center text-sm font-semibold text-slate-400 py-6">
											No data mapping metrics profile matches.
										</p>
									)}
								</div>
							</div>
						</>
					)}
				</main>
				<Footer />
			</div>
		</div>
	); 
};

export default Dashboard;
