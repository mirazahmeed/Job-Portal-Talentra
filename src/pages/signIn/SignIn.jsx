import React, { use } from "react";
import Lottie from "lottie-react";
import login from "../../assets/lotties/Login.json";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
	const { signIn } = use(AuthContext);
	const location = useLocation();

	console.log("location", location);
	const from = location.state || "/";
	const navigate = useNavigate();
	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		// sign in user
		signIn(email, password)
			.then((result) => {
				console.log(result.user);
				navigate(from);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
					<div className="w-1/2 text-center lg:text-left">
						<Lottie
							className="w-full"
							animationData={login}
							loop={true}
						/>
					</div>
					<div className="w-1/2 card bg-base-100 max-w-sm shrink-0 shadow-2xl">
						<div className="card-body">
							<h1 className="text-5xl font-bold">Sign In now!</h1>
							<form onSubmit={handleSignIn}>
								<fieldset className="fieldset">
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
										Sign In
									</button>
								</fieldset>
							</form>
							<SocialLogin from={from} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
