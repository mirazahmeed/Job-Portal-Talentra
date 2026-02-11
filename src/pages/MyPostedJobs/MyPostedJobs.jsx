import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import { jobsCreatedByPromise } from "../../services/jobsApi";
import PostedJobList from "./PostedJobList";

const MyPostedJobs = () => {
	const { user } = useAuth();
	return (
		<div>
			<h2 className="text-4xl text-center font-bold mb-10">
				My Posted Jobs
			</h2>
			<Suspense fallback={<div>Loading...</div>}>
				<PostedJobList
					jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></PostedJobList>
			</Suspense>
		</div>
	);
};

export default MyPostedJobs;
