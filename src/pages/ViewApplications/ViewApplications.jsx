import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
	const { job_id } = useParams();
	const applications = useLoaderData();
	const handleStatusChange = (e, app_id) => {
		console.log(e.target.value, app_id);
		axios
			.patch(`http://localhost:3000/applications/${app_id}`, {
				status: e.target.value,
			})
			.then((res) => {
				console.log(res.data);
				if (res.data.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "Application status updated successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<h2>Applications for this job : {job_id}</h2>
			<p>{applications.length}</p>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Applicant Email</th>
							<th>Applicant Name</th>
							<th>Resume</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{/* row */}
						{applications.map((application, index) => (
							<tr key={application._id}>
								<th>{index + 1}</th>
								<td>{application.applicantEmail}</td>
								<td>{application.applicantName}</td>
								<td>
									<button className="btn btn-primary">
										View Resume
									</button>
								</td>
								<td>
									<select
										onChange={(e) =>
											handleStatusChange(
												e,
												application._id,
											)
										}
										defaultValue={application.status}
										className="select">
										<option disabled={true}>
											Update Status
										</option>
										<option>Pending</option>
										<option>Under Review</option>
										<option>Interview Scheduled</option>
										<option>Offered</option>
										<option>Rejected</option>
									</select>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ViewApplications;
