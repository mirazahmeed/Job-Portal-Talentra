import React, { use } from "react";
import { Link } from "react-router";

const PostedJobList = ({ jobsCreatedByPromise }) => {
	const jobs = use(jobsCreatedByPromise);
	return (
		<div>
			<h2>Total Jobs: {jobs.length}</h2>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Company Name</th>
							<th>Job Title</th>
							<th>Total Applications</th>
							<th>Deadline</th>
							<th>View Applications</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{jobs.map((job, index) => (
							<tr key={job._id}>
								<th>{index + 1}</th>
								<td>{job.companyName}</td>
								<td>{job.jobTitle}</td>
								<td>{job.totalApplications}</td>
								<td>{job.applicationDeadline}</td>
								<td>
									<Link
										to={`/applicatoins/${job._id}`}
										className="btn btn-primary">
										View Applications
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PostedJobList;
