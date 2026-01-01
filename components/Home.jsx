import { Link } from "react-router-dom"
import "../styles/home.css"

export default function Home(){
	return(
		<div className="home">
			<section className="homeHero">
				<div className="homeHeroInner">
					<h1 className="homeTitle">Power &amp; Peace</h1>
					<h2 className="homeSubtitle">World Simulation Game</h2>

					<p className="homeLead">
						Power and Peace is a live, turnless geopolitical simulation where players become world leaders —
						negotiating, managing resources, and responding to crises in real time.
					</p>

					<div className="homeHeroActions">
						<Link className="btn Primary" to="/theGame">
							Learn more
						</Link>
					</div>
				</div>
			</section>

			<section className="homeCards">
				<div className="homeCardsInner">
					<article className="homeCard">
						<h3 className="homeCardTitle">Playtests</h3>
						<p className="homeCardText">
							We’re running early playtests with schools and groups. Read reviews from previous players.
						</p>
						<Link className="btn primary" to="/playtests">See More</Link>
					</article>

					<article className="homeCard">
						<h3 className="homeCardTitle">About Us</h3>
						<p className="homeCardText">
							Get to know the creators, our mission, and what we’re building next.
						</p>
						<Link className="btn primary" to="/aboutUs">Read More</Link>
					</article>

					<article className="homeCard">
						<h3 className="homeCardTitle">Contact Us</h3>
						<p className="homeCardText">
							Educators, investors, and partners — reach out. We’d love to talk.
						</p>
						<Link className="btn primary" to="/contact">Contact</Link>
					</article>
				</div>
			</section>
		</div>
	)
}