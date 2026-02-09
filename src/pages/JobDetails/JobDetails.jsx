import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { motion } from "motion/react";

const JobDetails = () => {
	const job = useLoaderData();
	//     {
	//     "_id": "6988de62a9e366ebc901ecb4",
	//     "title": "Software Engineer",
	//     "location": "Halishohor, Chittagong",
	//     "jobType": "Hybrid",
	//     "category": "Engineering",
	//     "applicationDeadline": "2024-12-31",
	//     "salaryRange": {
	//       "min": 40000,
	//       "max": 60000,
	//       "currency": "bdt"
	//     },
	//     "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
	//     "company": "Favorite IT",
	//     "requirements": [
	//       "JavaScript",
	//       "React",
	//       "Node.js",
	//       "MongoDB"
	//     ],
	//     "responsibilities": [
	//       "Develop and maintain software",
	//       "Collaborate with the team",
	//       "Participate in code reviews"
	//     ],
	//     "status": "active",
	//     "hr_email": "hr@techsolutions.com",
	//     "hr_name": "Farhan Rahman",
	//     "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
	//   }
	const {
		title,
		location,
		jobType,
		company,
		company_logo,
		salaryRange,
		description,
		requirements,
		_id,
		responsibilities,
		applicationDeadline,
	} = job;
	return (
		<div>
			<div className="max-w-7xl mx-auto px-4 py-10">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="card bg-base-100 shadow-xl overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
						alt="Office"
						className="h-72 w-full object-cover"
					/>

					<div className="card-body">
						<div className="flex flex-col lg:flex-row justify-between gap-4">
							<div>
								<h2 className="text-2xl font-bold">
									{title}
								</h2>
								<p className="text-gray-500">
									{company} · {jobType}
								</p>
							</div>

							<Link to={`/jobApply/${_id}`} className="btn btn-primary self-start">
								Apply Now
							</Link>
						</div>
					</div>
				</motion.div>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
					{/* Left Content */}
					<div className="lg:col-span-3 space-y-8">
						{/* Employment Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="card bg-base-100 shadow">
							<div className="card-body">
								<h3 className="text-lg font-semibold">
									Employment Information
								</h3>

								<div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
									<div>
										<p className="font-semibold">
											Industry
										</p>
										<p>{company}</p>
									</div>
									<div>
										<p className="font-semibold">
											Job Type
										</p>
										<p>{jobType}</p>
									</div>
									<div>
										<p className="font-semibold">
											Experience
										</p>
										<p>5+ Years</p>
									</div>
									<div>
										<p className="font-semibold">Salary</p>
										<p>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
									</div>
									<div>
										<p className="font-semibold">
											Location
										</p>
										<p>{location}</p>
									</div>
									<div>
										<p className="font-semibold">
											Deadline
										</p>
										<p>{applicationDeadline}</p>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Description */}
						<section className="space-y-4">
							<h3 className="text-xl font-semibold">
								Knowledge, Skills, and Experience
							</h3>

							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								{requirements.map((requirement, index) => (
									<li key={index}>{requirement}</li>
								))}
							</ul>
						</section>

						<section className="space-y-4">
							<h3 className="text-xl font-semibold">
								Responsibilities
							</h3>

							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								{responsibilities.map((responsibility, index) => (
									<li key={index}>{responsibility}</li>
								))}
							</ul>
						</section>

						<section className="space-y-4">
							<h3 className="text-xl font-semibold">
								Job Description
							</h3>
							<p className="text-gray-700">
								{description}
							</p>
						</section>
					</div>

					{/* Right Sidebar */}
					<div className="space-y-6">
						<div className="card bg-base-100 shadow">
							<div className="card-body items-center text-center">
								<img
									src={company_logo}
									alt="Company"
									className="w-20"
								/>
								<h4 className="font-bold text-lg">{company}</h4>
								<p className="text-sm text-gray-500">
									Software Company
								</p>
							</div>
						</div>

						<div className="card bg-base-100 shadow">
							<div className="card-body">
								<h4 className="font-semibold">Similar Jobs</h4>

								<ul className="space-y-3 text-sm">
									<li className="border-b pb-2">
										<p className="font-medium">
											Frontend Developer
										</p>
										<p className="text-gray-500">
											$700 – $900
										</p>
									</li>
									<li className="border-b pb-2">
										<p className="font-medium">
											JavaScript Engineer
										</p>
										<p className="text-gray-500">
											$800 – $1000
										</p>
									</li>
									<li>
										<p className="font-medium">
											Cloud Engineer
										</p>
										<p className="text-gray-500">
											$900 – $1100
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
