import "../styles/playtests.css"
import { useState } from "react";

const base = import.meta.env.BASE_URL;

const images = [
	`${base}assets/IMG_7784.jpg`,
	`${base}assets/IMG_7787.jpg`,
	`${base}assets/Screenshot_133012.png`,
	`${base}assets/IMG_9002.jpg`,
	`${base}assets/Screenshot_131924.png`
    ];

export default function Playtests(){
    const [current, setCurrent] = useState(0);
	return (
		<div className="playtests">
			<section className="playtestsHero">
				<div className="playtestsHeroInner">
					<h1 className="playtestsTitle">Playtests</h1>
					<p className="playtestsLead">
						A look at where we’ve tested, what users said, and what we've learned.
					</p>

					<div className="playtestsHeroStats">
						<div className="playtestsStat">
							<div className="playtestsStatNum">30+</div>
							<div className="playtestsStatLabel">Total hours played</div>
						</div>
						<div className="playtestsStat">
							<div className="playtestsStatNum">70+</div>
							<div className="playtestsStatLabel">Previous players</div>
						</div>
						<div className="playtestsStat">
							<div className="playtestsStatNum">9/10</div>
							<div className="playtestsStatLabel">Average rating</div>
						</div>
					</div>
				</div>
			</section>

			<section className="playtestsGallery">
				<div className="playtestsSectionInner">
					<div className="playtestsSectionHeader">
						<h2 className="playtestsSectionTitle">Past Playtests</h2>
						<p className="playtestsSectionSub">
							Playbright has run in-classroom beta tests of Power & Peace at middle schools, high schools, and colleges.
						</p>
					</div>

					<div className="playtestsGrid">
						<article className="playtestsCard">
							<div className="playtestsImgPlaceholder">
                                <img src={`${base}assets/IMG_7701.jpg`} alt="image of game in action"/>
                            </div>
							<div className="playtestsCardBody">
								<h3 className="playtestsCardTitle">Goucher College</h3>
								<p className="playtestsCardMeta">2024 • Baltimore, MD</p>
								<p className="playtestsCardText">
									The game began development as James Mullooly's senior capstone project and was first played in May 2024.
								</p>
							</div>
						</article>

						<article className="playtestsCard">
							<div className="playtestsImgPlaceholder">
                                <img src={`${base}assets/9007.png`} alt="image of game in action"/>
                            </div>
							<div className="playtestsCardBody">
								<h3 className="playtestsCardTitle">Presentation of Mary</h3>
								<p className="playtestsCardMeta">2025 • St. Paul, MN</p>
								<p className="playtestsCardText">
									Our first classroom playtest with 8th graders, which emphatically proved the success, value, and demand for the game.
								</p>
							</div>
						</article>

						<article className="playtestsCard">
							<div className="playtestsImgPlaceholder">
                                <img src={`${base}assets/3656.png`} alt="image of game in action"/>
                            </div>
							<div className="playtestsCardBody">
								<h3 className="playtestsCardTitle">St. Jude the Apostle</h3>
								<p className="playtestsCardMeta">2025 • Milwaukee, WI</p>
								<p className="playtestsCardText">
									We succcessfully stress-tested our innovative turnless, diceless, real-time game mechanics with 48 simultaneous players.
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
								
								<p className="playtestsCardText">
									Power & Peace is in public beta-testing, offering in-person sessions for any interested organization, including (but not limited to) schools, universities, corporate groups, or conventions. The project is progressing through the product development stage by gaining user feedback and gauging our market. We currently offer playtesting across the midwestern US, touring the prototype physical version to improve the game and its educational outcomes.
									<span className="blockSpacer" />
									Playbright is steadily approaching the launch of our MVP (minimum viable product) for Power & Peace, which will introduce our own software components and digital interfaces (such as a live Data Tracking System) for fully seamless gameplay in hybrid modality. 

									Below we provide a brief highlight of our playtest feedback, but we encourage you to contact us for a full report of what users have to say after testing our product.
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
									“I learned how complicated the relationships between countries are. I understand more of how conflicts are created, and the value in working with others.”
								</p>
								<p className="playtestsQuoteMeta">— Nation J players, St. Jude </p>
							</div>
							<div className="playtestsQuote">
								<p className="playtestsQuoteText">
									“It was so fun being in that world. I loved seeing the planets, all the pieces, everything right in front of us so the crises and negotiating felt super real.”
								</p>
								<p className="playtestsQuoteMeta">— Lucy, Nation C player, Goucher College</p>
							</div>
						</div>

						<div className="playtestsPanel">
							<h2 className="playtestsPanelTitle">Ratings &amp; Data</h2>
							<p className="playtestsPanelText">
								The following data comes from our post-game questionnaires and player surveys. Reach out to see more.
							</p>

							<div className="playtestsMiniGrid">
								<div className="playtestsMiniStat">
									<div className="playtestsMiniNum">86 %</div>
									<div className="playtestsMiniLabel">of players who gained skills in 4+ learning objectives</div>
								</div>
								<div className="playtestsMiniStat">
									<div className="playtestsMiniNum">9.2/10</div>
									<div className="playtestsMiniLabel">Avg user rating</div>
								</div>
								<div className="playtestsMiniStat">
									<div className="playtestsMiniNum">8 hrs</div>
									<div className="playtestsMiniLabel">Avg playtest length</div>
								</div>
								<div className="playtestsMiniStat">
									<div className="playtestsMiniNum">24</div>
									<div className="playtestsMiniLabel">Avg # of players</div>
								</div>
							</div>
						</div>
					</div>

					<div className="playtestsPanel playtestsPanelFull">
						<h2 className="playtestsPanelTitle">Educator Interviews &amp; Testimonial</h2>
						<p className="playtestsPanelText">
							After each playtest we have interviews with teachers to gather their reflections, recommendations, and testimonial about the product. 
							<span className="qaAttribution"> Here's an excerpt from Ms. Jessica Nelson's review, </span> the social studies teacher at Presentation of Mary:
						</p>

						<div className="playtestsQA">
							<div className="qaBlock">
								<p className="qaQuestion">
									Q: What sort of teaching moments might an educator expect if they ran the game for their students?
								</p>
								<p className="qaAnswer">
									<span className="qaAttribution">A:</span>
									When running this game, I saw so much cross-curricular knowledge being applied. Students needed to know math skills to manage and trade supplies, science skills to understand certain crises, geography skills to understand different terrains, and so much more. Students needed to participate in diplomacy, which led to great teaching moments for me. While it does capture a lot of interdisciplinary skills, it could also very easily be geared towards one class in particular. As a geography and history teacher, I loved seeing problems or events my students had studied in real life play in a different context. There’s lots of hands-on learning, but there’s many ways for students of every learning style to engage, apply themselves, and get something out of it, which is uncommon for classroom activities.
								</p>
							</div>

							<div className="qaBlock">
								<p className="qaQuestion">
									Q: How did students engage with this game activity versus a typical classroom activity?
								</p>
								<p className="qaAnswer">
									<span className="qaAttribution">A:</span>
									Students were engrossed right from the beginning. They are excited to try new ways to solve problems they don’t usually experience in the regular classroom setting. There was a lot of buy-in from students because they see it as a game, not as something they are being graded on. By the end of the session, students were begging to play more. Over the course of the week, students understood more and engaged more thoughtfully with the technical sides of things. It wasn’t just a paper or test; it was exciting, with every student engaged and contributing in ways that highlight their individual strengths, which they may or may not be totally aware of yet.
								</p>
							</div>

							<div className="qaBlock">
								<p className="qaQuestion">
									Q: Why would you recommend this turnless simulation game to other teachers?
								</p>
								<p className="qaAnswer">
									<span className="qaAttribution">A:</span>
									I would recommend this game to other teachers because of its interdisciplinary and cross-curricular nature. It touches on so many skills that students have learned but not necessarily been able to apply in real life. This simulation game is able to work students' brains differently while they think of how to solve multiple problems at the same time. Students have to apply their knowledge differently during this game than they do during a test, essay, or even a one-day mock trial. As a teacher, I could see concepts that students really understand and grasp, and concepts they haven’t studied before. The students were entertained the whole time playing, and continued to talk about it after. Parents also commented about how their students enjoyed the game and inquired if they could do it again next year.
								</p>
							</div>
						</div>
						
					</div>
					<section className="section" aria-labelledby="ctaplaytest">
				<div className="wrap">
					<div className="ctaBandplaytest">
						<h2>Interested in bringing Power &amp; Peace to your campus?</h2>
						<p>Just tell us your group size and setting to start planning today!</p>

						<div className="ctaRowplaytest">
							<Link className="btnPlay primary" to="/contact">Request Information</Link>
						</div>
					</div>
				</div>
			</section>
				</div>
			</section>
		</div>
	)
}