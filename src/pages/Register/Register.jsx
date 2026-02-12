import React, { use } from "react";
import Lottie from "lottie-react";
import register from "../../assets/lotties/register.json";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { updateProfile } from "firebase/auth";

const Register = () => {
	const { createUser } = use(AuthContext);
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photoURL, email, password);

		// create user
		createUser(email, password)
			.then((result) => {
				console.log(result.user);
				// update user profile
				return updateProfile(result.user, {
					displayName: name,
					photoURL: photoURL,
				});
			})
			.then(() => {
				console.log("User profile updated");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
					<div className="text-center lg:text-left">
						<Lottie animationData={register} loop={true} />
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<div className="card-body">
							<h1 className="text-5xl font-bold">
								Register now!
							</h1>
							<form action="" onSubmit={handleRegister}>
								<fieldset className="fieldset">
									<label className="label">Name</label>
									<input
										type="text"
										name="name"
										className="input"
										placeholder="Name"
									/>
									<label className="label">Photo URL</label>
									<input
										type="text"
										name="photoURL"
										className="input"
										placeholder="Photo URL"
									/>
									<label className="label">Email</label>
									<input
										type="email"
										name="email"
										className="input"
										placeholder="Email"
									/>
									<label className="label">Password</label>
									<input
										type="password"
										name="password"
										className="input"
										placeholder="Password"
									/>
									<div>
										<a className="link link-hover">
											Forgot password?
										</a>
									</div>
									<button className="btn btn-neutral mt-4">
										Register
									</button>
								</fieldset>
							</form>
							<SocialLogin />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
