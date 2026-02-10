import React from "react";

const AddJob = () => {
	//     {
	//     "_id": "698b39d9cf2501b37a0d90d7",
	//     "jobId": "6988de62a9e366ebc901ecb4",
	//     "applicantEmail": "hello@h.com",
	//     "applicantName": null,
	//     "applicantPhoto": null,
	//     "linkedin": "http://localhost:5173/jobApply/6988de62a9e366ebc901ecb4",
	//     "github": "http://localhost:5173/jobApply/6988de62a9e366ebc901ecb4",
	//     "portfolio": "http://localhost:5173/jobApply/6988de62a9e366ebc901ecb4",
	//     "resume": "http://localhost:5173/jobApply/6988de62a9e366ebc901ecb4",
	//     "job": {
	//       "_id": "6988de62a9e366ebc901ecb4",
	//       "title": "Software Engineer",
	//       "location": "Halishohor, Chittagong",
	//       "jobType": "Hybrid",
	//       "category": "Engineering",
	//       "applicationDeadline": "2024-12-31",
	//       "salaryRange": {
	//         "min": 40000,
	//         "max": 60000,
	//         "currency": "bdt"
	//       },
	//       "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
	//       "company": "Favorite IT",
	//       "requirements": [
	//         "JavaScript",
	//         "React",
	//         "Node.js",
	//         "MongoDB"
	//       ],
	//       "responsibilities": [
	//         "Develop and maintain software",
	//         "Collaborate with the team",
	//         "Participate in code reviews"
	//       ],
	//       "status": "active",
	//       "hr_email": "hr@techsolutions.com",
	//       "hr_name": "Farhan Rahman",
	//       "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
	//     }
	//   },

	return (
		<div>
			<h2 className="text-2xl font-bold">Add Job</h2>
			<form action="">
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<legend className="fieldset-legend">Basic Information</legend>

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
					<legend className="fieldset-legend">Application Deadline</legend>
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
			</form>
		</div>
	);
};

export default AddJob;
