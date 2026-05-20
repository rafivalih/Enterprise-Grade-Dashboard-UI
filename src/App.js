import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Global context lifecycle optimization modules wrapper components
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

// Structural authorization route checkpoint gateways
import ProtectedRoute from "./components/ProtectedRoute";

// Operational application workspace views
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ThemeProvider>
					<Routes>
						{/* Gateway routing segments context mappings configuration */}
						<Route path="/" element={<Navigate to="/dashboard" replace />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUp />} />

						{/* Shielded authorized dashboard application view structural node mapping context */}
						<Route element={<ProtectedRoute />}>
							<Route path="/dashboard" element={<Dashboard />} />
						</Route>

						{/* Fallback structural layout routing error catching matrix node */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</ThemeProvider>
			</AuthProvider>
		</BrowserRouter>

	);
};

export default App;
