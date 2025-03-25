import React, { useState, useContext } from "react";
// import LoginButton from "../Button/LoginButton";
import LogoutButton from "../Button/LogoutButton";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

import { SiDash } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import AuthContext from "../../context/AuthContext";
import LoginButton from "../Button/LoginButton";

function Navbar() {
	const { loggedIn } = useContext(AuthContext);
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();
	const apiUrl = process.env.REACT_APP_API_URL;

	async function logout() {
		await axios.get(`${apiUrl}/auth/logout`);
		// await axios.get("http://localhost:5000/auth/logout");
		// await axios.get("https://dashboard--backend.herokuapp.com/auth/logout");
		await getLoggedIn();
		history.push("/");
	}

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<nav className="navbar">
					{loggedIn === false && (
						<div>
							<Link
								to="/login"
								className="navbar-logo"
								onClick={closeMobileMenu}
							>
								<SiDash className="icon" />
								DashBoard
							</Link>
						</div>
					)}
						{loggedIn === true && (
						<div>
							<Link
								to="/home"
								className="navbar-logo"
								onClick={closeMobileMenu}
							>
								<SiDash className="icon" />
								DashBoard
							</Link>
						</div>
					)}

					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link
								to="/admin-login"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Admin Login
							</Link>
						</li>

						<li>
							{/* {loggedIn === false && (
								<Link
									to="/login"
									className="nav-links-mobile"
									onClick={closeMobileMenu}
								>
									Login
								</Link>
							)} */}
							{loggedIn === true && (
								<Link
									to="/logout"
									className="nav-links-mobile"
									onClick={closeMobileMenu && logout}
								>
									Logout
								</Link>
							)}
						</li>
					</ul>

					{loggedIn === false && (
						<div>
							<LoginButton />

							{/* <LogoutButton /> */}
						</div>
					)}
					{loggedIn === true && (
						<div>
							<LogoutButton />
						</div>
					)}
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
