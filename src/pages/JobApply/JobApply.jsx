import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
	const { id: jobId } = useParams();
	const { user } = useAuth();
	console.log(jobId, user);

	const handleApply = (e) => {
		e.preventDefault();
		const form = e.target;
		const linkedin = form.linkedin.value;
		const github = form.github.value;
		const portfolio = form.portfolio.value;
		const resume = form.resume.value;
		console.log(linkedin, github, portfolio, resume);

		const application = {
			jobId,
			applicantEmail: user?.email,
			applicantName: user?.displayName,
			applicantPhoto: user?.photoURL,
			linkedin,
			github,
			portfolio,
			resume,
		};

		axios
			.post("http://localhost:3000/applications", application)

			.then((response) => {
				console.log(response.data);
				if (response.data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "You have successfully applied for the job!",
						icon: "success",
						confirmButtonText: "Cool",
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<h2 className="text-2xl font-bold">
				Apply for this Job <Link to={`/jobs/${jobId}`}>Details</Link>
			</h2>
			<form onSubmit={handleApply}>
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
					<label className="label">LinkedIn Profile Link</label>
					<input
						type="url"
						className="input"
						name="linkedin"
						placeholder="https://www.linkedin.com/in/username"
					/>

					<label className="label">GitHub Profile Link</label>
					<input
						type="url"
						className="input"
						name="github"
						placeholder="https://github.com/username"
					/>

					<label className="label">Portfolio Link</label>
					<input
						type="url"
						className="input"
						name="portfolio"
						placeholder="Portfolio Link"
					/>

					<label className="label">Resume Link</label>
					<input
						type="url"
						className="input"
						name="resume"
						placeholder="Resume Link"
					/>

					<input
						type="submit"
						value="Apply"
						className="btn btn-neutral mt-4"
					/>
				</fieldset>
			</form>
		</div>
	);
};

export default JobApply;
