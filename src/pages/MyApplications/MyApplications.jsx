import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationsList from "./ApplicationsList";
import { MoonLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../services/applicationsApi";

const MyApplications = () => {
	const { user } = useAuth();
	return (
		<div>
			<ApplicationStats />
			<Suspense
				fallback={
					<div className="flex justify-center items-center h-screen">
						<MoonLoader color="#36d7b7" size={50} />
					</div>
				}>
				<ApplicationsList
					myApplicationsPromise={myApplicationsPromise(user.email)}
				/>
			</Suspense>
		</div>
	);
};

export default MyApplications;
