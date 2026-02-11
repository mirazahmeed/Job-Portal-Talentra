import React from "react";
import Swal from "sweetalert2";

const JobApplicationRow = ({
	application,
	index,
	applicationsList,
	setApplicationsList,
}) => {
	const { _id, company, title, company_logo, location, jobType } =
		application;

	const handleViewDetails = (application) => {
		console.log(application);
	};


	const handleCancelApplication = (_id) => {
		console.log(_id);

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			console.log(result.isConfirmed);
			if (result.isConfirmed) {
				// start deleting the coffee
				fetch(`http://localhost:3000/applications/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Your file has been deleted.",
								icon: "success",
							});
							// remove the deleted application from the applications array
							const remainingApplications =
								applicationsList.filter(
									(application) => application._id !== _id,
								);
							setApplicationsList(remainingApplications);
						}
					});
			}
		});
	};
	return (
		<tr>
			<th>
				<label>{index + 1}</label>
			</th>
			<td>
				<div className="flex items-center gap-3">
					<div className="avatar">
						<div className="mask mask-squircle h-12 w-12">
							<img
								src={company_logo}
								alt="Avatar Tailwind CSS Component"
							/>
						</div>
					</div>
					<div>
						<div className="font-bold">{company}</div>
						<div className="text-sm opacity-50">{location}</div>
					</div>
				</div>
			</td>
			<td>
				{title}
				<br />
				<span className="badge badge-ghost badge-sm">{jobType}</span>
			</td>
			<td>Purple</td>
			<th>
				<button
					onClick={() => handleViewDetails(application)}
					className="btn btn-ghost btn-xs">
					View Details
				</button>
				<button
					onClick={() => handleCancelApplication(_id)}
					className="btn btn-ghost btn-xs">
					Cancel Application
				</button>
			</th>
		</tr>
	);
};

export default JobApplicationRow;
