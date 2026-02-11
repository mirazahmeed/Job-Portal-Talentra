import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
	const { user } = useAuth();
	const handleAddJob = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// console.log(data);

		// process salary range
		const { min, max, currency, ...rest } = data;
		rest.salaryRange = { min, max, currency };
		// process requirements
		rest.requirements = rest.requirements
			.split(",")
			.map((item) => item.trim());
		// process responsibilities
		rest.responsibilities = rest.responsibilities
			.split(",")
			.map((item) => item.trim());

		console.log(rest);
		// save job to database
		axios
			.post("http://localhost:3000/jobs", rest)
			.then((res) => {
				if (res.data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Job added successfully",
						icon: "success",
						confirmButtonText: "OK",
					});
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="container mx-auto w-full mt-10 p-4">
			<h2 className="text-4xl text-center font-bold mb-10">
				Post a New Job
			</h2>
			<form
				onSubmit={handleAddJob}
				className="grid grid-cols-12 gap-4 justify-center w-full mx-auto">
				<div className="col-span-4 flex flex-col gap-4 mx-auto">
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">
							Basic Information
						</legend>

						<label className="label">Job Title</label>
						<input
							type="text"
							name="jobTitle"
							className="input"
							placeholder="Job Title"
						/>

						<label className="label">Job Location</label>
						<input
							type="text"
							name="jobLocation"
							className="input"
							placeholder="Job Location"
						/>
						<label className="label">Company Name</label>
						<input
							type="text"
							name="company"
							className="input"
							placeholder="Company Name"
						/>
						<label className="label">Company Logo URL</label>
						<input
							type="url"
							name="company_logo"
							className="input"
							placeholder="Company Logo URL"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">Job Type</legend>
						<div className="filter">
							<input
								className="btn filter-reset"
								type="radio"
								name="jobType"
								aria-label="X"
							/>
							<input
								className="btn"
								type="radio"
								name="jobType"
								value="On Site"
								aria-label="On Site"
							/>
							<input
								className="btn"
								type="radio"
								name="jobType"
								value="Hybrid"
								aria-label="Hybrid"
							/>
							<input
								className="btn"
								type="radio"
								name="jobType"
								value="Remote"
								aria-label="Remote"
							/>
							<input
								className="btn"
								type="radio"
								name="jobType"
								value="Full Time"
								aria-label="Full Time"
							/>
						</div>
					</fieldset>

					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">
							Job Catagory
						</legend>

						<select
							defaultValue="Pick a color"
							name="jobCatagory"
							className="select">
							<option disabled={true}>Job Catagory</option>
							<option>Engineering</option>
							<option>Marketing</option>
							<option>Education</option>
							<option>Finance</option>
						</select>
					</fieldset>
				</div>
				<div className="col-span-4 flex flex-col gap-4 mx-auto">
					{/* description */}
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">Description</legend>
						<textarea
							className="textarea h-24"
							name="description"
							placeholder="Description"></textarea>
						<div className="label">Optional</div>
					</fieldset>
					{/* Requirements */}
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">
							Requirements
						</legend>
						<textarea
							className="textarea h-24"
							name="requirements"
							placeholder="Requirements"></textarea>
						<div className="label">
							Separate each requirement with a comma
						</div>
					</fieldset>
					{/* Responsibilities */}
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">
							Responsibilities
						</legend>
						<textarea
							className="textarea h-24"
							name="responsibilities"
							placeholder="Responsibilities"></textarea>
						<div className="label">
							Separate each responsibility with a comma
						</div>
					</fieldset>
				</div>

				<div className="col-span-4 flex flex-col gap-4 mx-auto">
					{/* Salary Range */}
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-2 gap-2 grid grid-cols-3">
						<legend className="fieldset-legend">
							Salary Range
						</legend>
						<div>
							<label className="label">Mininmum Salary</label>
							<input
								type="number"
								className="input"
								name="min"
								placeholder="Min"
							/>
						</div>

						<div>
							<label className="label">Maximum Salary</label>
							<input
								type="number"
								className="input"
								name="max"
								placeholder="Max"
							/>
						</div>
						<div>
							<label className="label">Currency</label>
							<select
								defaultValue="BDT"
								className="select"
								name="currency">
								<option disabled={true}>Currency</option>
								<option>BDT</option>
								<option>USD</option>
								<option>EUR</option>
								<option>GBP</option>
							</select>
						</div>
					</fieldset>
					{/* HR Email */}
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">HR Email</legend>
						<input
							type="email"
							className="input"
							name="hr_email"
							required
							defaultValue={user.email}
							placeholder="HR Email"
						/>
					</fieldset>
					{/* HR Name */}
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">HR Name</legend>
						<input
							type="text"
							className="input"
							name="hr_name"
							defaultValue={`Miraz Ahmed`}
							placeholder="HR Name"
						/>
					</fieldset>
					{/* Application Deadline */}
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">
							Application Deadline
						</legend>
						<input
							type="date"
							className="input"
							name="applicationDeadline"
						/>
					</fieldset>
					{/* Status */}
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend className="fieldset-legend">Status</legend>
						<input
							type="checkbox"
							name="status"
							value="Active"
							defaultChecked
							className="toggle"
						/>
					</fieldset>
				</div>
				<div className="flex w-full col-span-12 justify-center">
					<input
						type="submit"
						value="Post Job"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddJob;
