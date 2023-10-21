import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
	const [loginFields, setLoginFields] = React.useState({
		email: { value: "", error: "" },
		password: { value: "", error: "" },
		friendlyUrl: { value: "", error: "" },
	});

	const [isUserValid, setUserIsValid] = React.useState(true);

	const handleChange = (e: any) => {
		setLoginFields({
			...loginFields,
			[e.target.name]: { value: e.target.value, error: "" },
		});
	};

	const submitForm = (e: any) => {
		e.preventDefault();
	};

	return (
		<div className="container login-wrapper">
			<div className="row">
				<div className="col-md-6 offset-md-3 login-wrapper-form">
					<form onSubmit={submitForm} className="form ">
						<h1>Login</h1>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="email"
								name="email"
								aria-describedby="recipeHelp"
								placeholder="Email"
								value={loginFields.email.value}
								onChange={handleChange}
							/>
							{loginFields.email.error && (
								<span className="text-error">{loginFields.email.error}</span>
							)}
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								aria-describedby="recipeHelp"
								placeholder="Password"
								value={loginFields.password.value}
								onChange={handleChange}
							/>
							{loginFields.password.error && (
								<span className="text-error">{loginFields.password.error}</span>
							)}
						</div>
						<button
							type="submit"
							className="btn btn-dark btn-lg btn-block main-action-btn"
						>
							Login
						</button>

						<Link to="/user/register" className="user-reg-link">
							Register
						</Link>

						{!isUserValid && (
							<p className="login-error-msg">
								Invalid credentials
							</p>
						)}


					</form>
				</div>
			</div>
		</div>
	);
};