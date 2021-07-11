import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Login.css";

const UserSignup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVerify, setPasswordVerify] = useState("");

	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();

	async function register(e) {
		e.preventDefault();

		try {
			const registerData = {
				email,
				password,
				passwordVerify,
			};

			// await axios.post("http://localhost:5000/auth/", registerData);
			await axios.post("https://dashboard--backend.herokuapp.com/auth/", registerData);
			// await axios.post(
			//   "https://mern-auth-template-tutorial.herokuapp.com/auth/",
			//   registerData
			// );
			await getLoggedIn();
			history.push("/home");
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="login-box">
			<h1>Register</h1>
			<form onSubmit={register}>
				<div className="textbox">
					<i className="fas fa-user"></i>
					<input
						type="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
                <div className="textbox">
                <i className="fas fa-lock"></i>
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>
                <div className="textbox">
                <i className="fas fa-lock"></i>
					<input
						type="password"
						placeholder="Verify your password"
						onChange={(e) => setPasswordVerify(e.target.value)}
						value={passwordVerify}
					/>
				</div>
				<button type="submit" className="login-btn">Register</button>
			</form>
			<div className="bottom-link">
				Already have an account? <Link to="/" className="link">Sign In</Link>
			</div>
		</div>
	);
};

export default UserSignup;
