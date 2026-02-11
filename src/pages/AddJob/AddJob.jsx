import React from "react";

const AddJob = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold">Add Job</h2>
			<form action="">
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">
						Basic Information
					</legend>

					<label className="label">Job Title</label>
					<input
						type="text"
						className="input"
						placeholder="Job Title"
					/>

					<label className="label">Job Location</label>
					<input
						type="text"
						className="input"
						placeholder="Job Location"
					/>
					<label className="label">Company Name</label>
					<input
						type="text"
						className="input"
						placeholder="Company Name"
					/>
					<label className="label">Company Logo URL</label>
					<input
						type="url"
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
							aria-label="On Site"
						/>
						<input
							className="btn"
							type="radio"
							name="jobType"
							aria-label="Hybrid"
						/>
						<input
							className="btn"
							type="radio"
							name="jobType"
							aria-label="Remote"
						/>
						<input
							className="btn"
							type="radio"
							name="jobType"
							aria-label="Full Time"
						/>
					</div>
				</fieldset>

				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">Job Catagory</legend>

					<select defaultValue="Pick a color" className="select">
						<option disabled={true}>Job Catagory</option>
						<option>Engineering</option>
						<option>Marketing</option>
						<option>Education</option>
						<option>Finance</option>
					</select>
				</fieldset>
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">
						Application Deadline
					</legend>
					<input type="date" className="input" />
				</fieldset>

				{/* Salary Range */}
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">Salary Range</legend>
					<div>
						<label className="label">Mininmum Salary</label>
						<input
							type="number"
							className="input"
							name="minSalary"
							placeholder="Mininmum Salary"
						/>
					</div>

					<div>
						<label className="label">Maximum Salary</label>
						<input
							type="number"
							className="input"
							name="maxSalary"
							placeholder="Maximum Salary"
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
				{/* description */}
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">Description</legend>
					<textarea
						className="textarea h-24"
						placeholder="Description"></textarea>
					<div className="label">Optional</div>
				</fieldset>
				{/* Requirements */}
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">Requirements</legend>
					<textarea
						className="textarea h-24"
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
						placeholder="Responsibilities"></textarea>
					<div className="label">
						Separate each responsibility with a comma
					</div>
				</fieldset>

				{/* HR Email */}
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">HR Email</legend>
					<input
						type="email"
						className="input"
						placeholder="HR Email"
					/>
				</fieldset>
				{/* HR Name */}
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">HR Name</legend>
					<input
						type="text"
						className="input"
						placeholder="HR Name"
					/>
				</fieldset>
				{/* Status */}
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">Status</legend>
					<input type="checkbox" defaultChecked className="toggle" />
				</fieldset>
			</form>
		</div>
	);
};

export default AddJob;
