import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
	return (
		<nav className="nav">
			<div className="navInner">
				<NavLink to="/" end className="brandLink">
					<div className="brand">
						<span>Power &amp; Peace</span>
						<span>World Simulation Game</span>
					</div>
				</NavLink>

				<div className="navLinks">
					<NavLink to="/theGame" end className={({ isActive }) => (isActive ? "active" : "")}>
						The Game
					</NavLink>
					<NavLink to="/playtests" end className={({ isActive }) => (isActive ? "active" : "")}>
						Playtests
					</NavLink>
					<NavLink to="/aboutUs" className={({ isActive }) => (isActive ? "active" : "")}>
						About Us
					</NavLink>
					<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
						Contact
					</NavLink>
				</div>
			</div>
		</nav>
	);
}