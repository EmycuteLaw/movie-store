import React, { useState } from "react";
import Logo from "../shared/logo";
import "./Register.css";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        console.log("Registration successful:", formData);
    };

    return (
        <div className="register-page">
            <div className="register-card">

                <div className="register-brand">
                    <div className="logo">
                        <Logo />
                    </div>

                    <div>
                        <span className="register-brand-name">
                            CineScope
                        </span>
                    </div>
                </div>

                <div className="register-header">
                    <h1 className="register-title">
                        Create an account
                    </h1>

                    <p className="register-subtitle">
                        Join CineScope and start your cinematic journey.
                    </p>
                </div>

                <form
                    className="register-form"
                    onSubmit={handleSubmit}
                >

                    <div className="register-field">
                        <label htmlFor="name">
                            Full Name
                        </label>

                        <input
                            id="name"
                            name="name"
                            className="register-input"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="register-field">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            className="register-input"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="register-field">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            className="register-input"
                            type="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="register-field">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>

                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            className="register-input"
                            type="password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="register-submit"
                    >
                        Create Account
                    </button>

                </form>

                <div className="register-footer">
                    <span>Already have an account? </span>

                    <a
                        href="/login"
                        className="register-login-link"
                    >
                        Sign In
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Register;
