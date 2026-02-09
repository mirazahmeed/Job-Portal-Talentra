import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import ScrollToTop from "../components/ScrollToTop";

const RootLayouts = () => {
	return (
		<div>
			<Navbar />
			<div className="min-h-screen container mx-auto">
				<ScrollToTop />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default RootLayouts;
