import React from "react";

import { Link } from "react-router-dom";
import "./Register.scss";

export const Register = () => {
    const [userFields, setUserFields] = React.useState({
        email: { value: "", error: "" },
        name: { value: "", error: "" },
        location: { value: "", error: "" },
        createdOn: { value: "", error: "" },
        password: { value: "", error: "" },
        friendlyUrl: { value: "", error: "" },
    });


    const handleChange = (e: any) => {
        setUserFields({
            ...userFields,
            [e.target.name]: { value: e.target.value, error: "" },
        });
    };

    const submitForm = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="container register-wrapper">
            <div className="row">
                <div className="col-md-6 offset-md-3 register-wrapper-form">
                    <h1>Register</h1>
                    <form onSubmit={submitForm} className="form">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                aria-describedby="recipeHelp"
                                placeholder="Name"
                                value={userFields.name.value}
                                onChange={handleChange}
                            />
                            {userFields.name.error && (
                                <span className="text-error">{userFields.name.error}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                name="location"
                                placeholder="Location"
                                value={userFields.location.value}
                                onChange={handleChange}
                            />
                            {userFields.name.error && (
                                <span className="text-error">{userFields.location   .error}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                aria-describedby="recipeHelp"
                                placeholder="Email"
                                value={userFields.email.value}
                                onChange={handleChange}
                            />
                            {userFields.email.error && (
                                <span className="text-error">{userFields.email.error}</span>
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
                                value={userFields.password.value}
                                onChange={handleChange}
                            />
                            {userFields.password.error && (
                                <span className="text-error">{userFields.password.error}</span>
                            )}
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block main-action-btn">
                            Register
                        </button>
                        <Link to="/user/login" className="user-reg-link">
                            Login
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    );
};