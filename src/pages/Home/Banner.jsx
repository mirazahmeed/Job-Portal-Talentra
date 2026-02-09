import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="flex-1">
					<motion.img
						src={team1}
                        animate={{y:[90,40,90]}}  
                        transition={{duration:5,repeat:Infinity}}
						className="max-w-sm border-blue-800 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl  shadow-2xl"
					/>
                    <motion.img
						src={team2}
                        animate={{x:[100,140,100]}}  
                        transition={{duration:10,repeat:Infinity}}
						className="max-w-sm border-blue-800 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl  shadow-2xl"
					/>
				</div>
				<div className="flex-1">
					<motion.h1
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className="text-5xl font-bold">
						Latest{" "}
						<motion.span
							animate={{
								color: [
									"#301934",
									"#871F78",
									"#1c0333",
									"#6a329f",
									"#4B0150",
								],
							}}
							transition={{ duration: 4, repeat: Infinity }}>
							Jobs
						</motion.span>{" "}
						For You!
					</motion.h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
