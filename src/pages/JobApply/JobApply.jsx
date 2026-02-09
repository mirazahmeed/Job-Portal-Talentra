import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

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
	};
	return (
		<div>
			<h2 className="text-2xl font-bold">Apply for this Job <Link to={`/jobs/${jobId}`}>Details</Link></h2>
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
