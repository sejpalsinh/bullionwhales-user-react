import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./user-pages/dashboard/Dashboard"));

const AppRoutes = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Navigate to="/dashboard" />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
