import React from "react";
import JobCard from "../Shared/JobCard";
import { useState } from "react";
import { useEffect } from "react";

const HotJobs = ({ jobsPromise }) => {
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		jobsPromise.then((data) => setJobs(data));
	}, [jobsPromise]);
	return (
		<div className="py-10 justify-center flex flex-col items-center">
			<div className="flex items-center gap-2 flex-col py-10">
				<h2 className="text-5xl font-bold">Hot Jobs</h2>
				<p className="text-xl text-gray-500">
					Search and connect with your dream job faster
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{jobs.map((job) => (
					<JobCard key={job._id} job={job}></JobCard>
				))}
			</div>
		</div>
	);
};

export default HotJobs;
