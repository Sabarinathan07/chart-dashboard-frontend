
import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Login.css";



const AdminLogin = () => {
    
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();
	const apiUrl = process.env.REACT_APP_API_URL;

	async function login(e) {
		e.preventDefault();

		try {
			const loginData = {
				email,
				password,
			};

			await axios.post(`${apiUrl}/auth/login`, loginData);
			// await axios.post("http://localhost:5000/auth/login", loginData);
			// await axios.post("https://dashboard--backend.herokuapp.com/auth/login", loginData);
			await getLoggedIn();
			history.push("/home");
		} catch (err) {
			console.error(err);
		}
	}

	return (
		
			<div className="login-box">
				<h1>Login</h1>
				<form onSubmit={login}>
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

					<input type="submit" value="Sign In" className="login-btn" />
                </form>
                
			</div>
		
	);

}
 
export default AdminLogin;