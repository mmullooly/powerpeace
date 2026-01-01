import "../styles/playtests.css"
import { useState } from "react";
import { Link } from "react-router-dom"

const images = [
	"../src/assets/IMG_7786.jpg",
	"../src/assets/IMG_7787.jpg",
	"../src/assets/IMG_9002.jpg"
    ];

export default function Playtests(){
    const [current, setCurrent] = useState(0);
	return (
		<div className="playtests">
			<section className="playtestsHero">
				<div className="playtestsHeroInner">
					<h1 className="playtestsTitle">Playtests</h1>
					<p className="playtestsLead">
						A look at where we’ve tested, what players said, and what we learned.
					</p>

					<div className="playtestsHeroStats">
						<div className="playtestsStat">
							<div className="playtestsStatNum">3+</div>
							<div className="playtestsStatLabel">Campuses / groups</div>
						</div>
						<div className="playtestsStat">
							<div className="playtestsStatNum">60+</div>
							<div className="playtestsStatLabel">Players (placeholder)</div>
						</div>
						<div className="playtestsStat">
							<div className="playtestsStatNum">★ ★ ★ ★ ★</div>
							<div className="playtestsStatLabel">Avg rating (placeholder)</div>
						</div>
					</div>
				</div>
			</section>

			<section className="playtestsGallery">
				<div className="playtestsSectionInner">
					<div className="playtestsSectionHeader">
						<h2 className="playtestsSectionTitle">Past Playtests</h2>
						<p className="playtestsSectionSub">
							Do we want a subtitle here?
						</p>
					</div>

					<div className="playtestsGrid">
						<article className="playtestsCard">
							<div className="playtestsImgPlaceholder">
                                <img src="../src/assets/IMG_7786.jpg" alt="image of game in action"/>
                            </div>
							<div className="playtestsCardBody">
								<h3 className="playtestsCardTitle">Goucher College</h3>
								<p className="playtestsCardMeta">2024 • Playtest Session</p>
								<p className="playtestsCardText">
									Short highlight placeholder: what went well, what surprised you, one specific moment.
								</p>
							</div>
						</article>

						<article className="playtestsCard">
							<div className="playtestsImgPlaceholder">
                                <img src="../src/assets/9007.png" alt="image of game in action"/>
                            </div>
							<div className="playtestsCardBody">
								<h3 className="playtestsCardTitle">Pres of M…. MN</h3>
								<p className="playtestsCardMeta">2024 • Playtest Session</p>
								<p className="playtestsCardText">
									Short highlight placeholder: a quote, a stat, or a single “this proved the concept” takeaway.
								</p>
							</div>
						</article>

						<article className="playtestsCard">
							<div className="playtestsImgPlaceholder">
                                <img src="../src/assets/3656.png" alt="image of game in action"/>
                            </div>
							<div className="playtestsCardBody">
								<h3 className="playtestsCardTitle">St. Jude</h3>
								<p className="playtestsCardMeta">2025 • Playtest Session</p>
								<p className="playtestsCardText">
									Short highlight placeholder: how the group engaged, what the pacing felt like, etc.
								</p>
							</div>
						</article>

						<article className="playtestsCard playtestsCardWide">
							<div className="playtestsCarousel">
		<img
			src={images[current]}
			alt="Playtest"
			className="playtestsCarouselImg"
		/>

		<button
			className="carouselBtn prev"
			onClick={() => setCurrent((current - 1 + images.length) % images.length)}
		>
			‹
		</button>

		<button
			className="carouselBtn next"
			onClick={() => setCurrent((current + 1) % images.length)}
		>
			›
		</button>
	</div>
							<div className="playtestsCardBody">
								<h3 className="playtestsCardTitle">About our Playtests</h3>
								<p className="playtestsCardMeta"> What they offer • View photos</p>
								<p className="playtestsCardText">
									This is a great spot for a bigger story: how this can be brought to your school, what the session looked like, what changed in the
									game afterward, and why it matters.
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section className="playtestsSections">
				<div className="playtestsSectionInner">
					<div className="playtestsTwoCol">
						<div className="playtestsPanel">
							<h2 className="playtestsPanelTitle">Player Reviews</h2>
							<div className="playtestsQuote">
								<p className="playtestsQuoteText">
									“Placeholder quote that feels real. One sentence that captures the experience.”
								</p>
								<p className="playtestsQuoteMeta">— Student / Teacher / Player (placeholder)</p>
							</div>
							<div className="playtestsQuote">
								<p className="playtestsQuoteText">
									“Second placeholder quote. Keep it specific and not generic.”
								</p>
								<p className="playtestsQuoteMeta">— Role / Org (placeholder)</p>
							</div>
						</div>

						<div className="playtestsPanel">
							<h2 className="playtestsPanelTitle">Ratings &amp; Data</h2>
							<p className="playtestsPanelText">
								Placeholder: quick metrics like engagement time, replay interest, clarity of objectives, etc.
							</p>

							<div className="playtestsMiniGrid">
								<div className="playtestsMiniStat">
									<div className="playtestsMiniNum">96%</div>
									<div className="playtestsMiniLabel">Would play again</div>
								</div>
								<div className="playtestsMiniStat">
									<div className="playtestsMiniNum">4.8/5</div>
									<div className="playtestsMiniLabel">Session rating</div>
								</div>
								<div className="playtestsMiniStat">
									<div className="playtestsMiniNum">7 hrs</div>
									<div className="playtestsMiniLabel">Avg playtest length</div>
								</div>
								<div className="playtestsMiniStat">
									<div className="playtestsMiniNum">8/10</div>
									<div className="playtestsMiniLabel">Strategy depth?? idk</div>
								</div>
							</div>
						</div>
					</div>

					<div className="playtestsPanel playtestsPanelFull">
						<h2 className="playtestsPanelTitle">Interviews &amp; Testimonials</h2>
						<p className="playtestsPanelText">
							Placeholder: this section can become a list of short interview highlights, embedded clips,
							or a “what teachers noticed” / “what students loved” breakdown.
						</p>

						<div className="playtestsBullets">
							<div className="playtestsBullet">Placeholder highlight: what this proved about the game.</div>
							<div className="playtestsBullet">Placeholder highlight: one change you made after feedback.</div>
							<div className="playtestsBullet">Placeholder highlight: one moment that felt “this is it.”</div>
						</div>
					</div>
                    <div className="playtestsPanel playtestsPanelFull">
                        <h2 className="playtestsPanelTitle">Interested in bringing Power &amp; Peace to your campus?</h2>
                        <p className="playtestsPanelText">
                        <Link className="btn secondary" to="/contact">Let's Talk</Link>
                        </p>
                    </div>
				</div>
			</section>
		</div>
	)
}