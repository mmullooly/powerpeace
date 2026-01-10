import { Link } from "react-router-dom"
import "../styles/home.css"

export default function Home(){
	return(
		<div className="home">
			<section className="homeHero">
				{/* Option A (recommended): put file in /public/images/hero.jpg */}
				<img
					className="homeHeroImg"
					src="../src/assets/board1.jpeg"
					alt=""
					aria-hidden="true"
				/>

				<div className="homeWrap">
					<div className="homeHeroInner">
						<h1 className="homeTitle">Power &amp; Peace</h1>
						<h2 className="homeSubtitle">World Simulation Game</h2>

						<p className="homeLead">
							Power and Peace is a live, turnless geopolitical simulation where players become world leaders —
							negotiating, managing resources, and responding to crises in real time.
						</p>

						<div className="homeHeroActions">
							<Link className="btnHome primary" to="/theGame">
								Learn more
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="homeCards">
				<div className="homeWrap">
					<div className="homeCardsInner">
						<article className="homeCard">
							<h3 className="homeCardTitle">Playtests</h3>
							<p className="homeCardText">
								We’re currently running playtests with schools and groups. Read reviews from previous players and educators.
							</p>
							<div className="homeCardCta">
								<Link className="btnHome secondary" to="/playtests">See More</Link>
							</div>
						</article>

						<article className="homeCard">
							<h3 className="homeCardTitle">About Us</h3>
							<p className="homeCardText">
								Get to know the creators, our mission, and the project background.
							</p>
							<div className="homeCardCta">
								<Link className="btnHome secondary" to="/aboutUs">Read More</Link>
							</div>
						</article>

						<article className="homeCard">
							<h3 className="homeCardTitle">Contact Us</h3>
							<p className="homeCardText">
								Educators, investors, and partners — reach out. We’d love to talk.
							</p>
							<div className="homeCardCta">
								<Link className="btnHome secondary" to="/contact">Contact</Link>
							</div>
						</article>
					</div>
				</div>
			</section>
		</div>
	)
}