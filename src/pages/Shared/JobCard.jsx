import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";


const JobCard = ({ job }) => {
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
		<motion.div
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.5 }}
			className="card bg-base-100 w-96 shadow-2xl p-5">
			<div className="flex gap-5 h-1/4">
				<figure className="w-1/4">
					<img className="w-full" src={company_logo} alt="Shoes" />
				</figure>
				<div className="flex flex-col w-3/4">
					<p className="font-bold">{company}</p>
					<p className="flex gap-2 items-center text-gray-500">
						<FaMapMarkedAlt />
						{location}
					</p>
				</div>
			</div>
			<div className="card-body h-3/4">
				<h2 className="card-title">
					{title}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p className="text-gray-500">{description}</p>
				<p className="text-gray-500">
					Salary: {salaryRange.min} - {salaryRange.max}{" "}
					{salaryRange.currency}
				</p>
				<div className="card-actions">
					{requirements.map((requirement, index) => (
						<div
							className="text-gray-500 badge badge-outline gap-2"
							key={index}>
							{requirement}
						</div>
					))}
				</div>
				<div className="card-actions justify-end">
					<Link to={`/jobs/${_id}`} className="btn btn-primary ">
						Show Details
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default JobCard;
