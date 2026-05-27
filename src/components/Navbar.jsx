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

				{/* Home icon (mobile only) */}
				<NavLink
					to="/" end className="homeIconLink" aria-label="Home" title="Home">
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path d="M12 3.2 2.5 11h1.8v9.8h6.2v-6h3v6h6.2V11h1.8L12 3.2z" />
					</svg>
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