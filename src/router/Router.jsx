import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoute from "../routes/PrivateROute";
import MyApplications from "../pages/MyApplications/MyApplications";

const Router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayouts,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/jobs/:id",
				Component: JobDetails,
				loader: ({ params }) =>
					fetch(`http://localhost:3000/jobs/${params.id}`),
			},
			{
				path: "/jobApply/:id",
				element: (
					<PrivateRoute>
						<JobApply />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:3000/jobs/${params.id}`),
			},
			{
				path: "/myApplications",
				element: (
					<PrivateRoute>
						<MyApplications />
					</PrivateRoute>
				),
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "/signIn",
				Component: SignIn,
			},
		],
	},
]);

export default Router;
