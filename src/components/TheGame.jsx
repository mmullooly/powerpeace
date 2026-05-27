import "../styles/game.css"
import { Link } from "react-router-dom";

export default function TheGame(){
	return(
		<main className="page the-game">
			<header className="hero">
				<div className="heroInner">
					<h1>Power &amp; Peace</h1>
					<h2 className="eye">Turnless • Diceless • Cardless • Simultaneous </h2>
					<h2>Geopolitics played in real-time</h2>

					<p className="lede">
						Players lead up to <strong>26 Nations</strong> across <strong>four rotating planets</strong>, increasing their own prosperity while managing supply chains of <strong>15 vital resources</strong> — all amidst a barrage of world crises.
					</p>

					<div className="ctaRow">
						<Link className="btn primary" to="/contact">Schedule a playtest</Link>
						<Link className="btn secondary" to="/playtests">Past playtests</Link>
					</div>

					<div className="heroMedia" aria-label="Game visuals">
						<figure className="media primary">
							<div className="imgPlaceholder">
								<img src={`${import.meta.env.BASE_URL}assets/9370.webp`} alt="image of game in action" loading="lazy"/>
							</div>
							<figcaption>A real-time simulation game where simultaneously collaborative and competitive diplomacy is the core gameplay element.</figcaption>
						</figure>

						<div className="mediaStack">
							<figure className="media">
								<div className="imgPlaceholder">
									<img src={`${import.meta.env.BASE_URL}assets/board2.webp`} alt="Board closeup" loading="lazy"/>
								</div>
							</figure>
							<figure className="media">
								<div className="imgPlaceholder">
									<img src={`${import.meta.env.BASE_URL}assets/jude4c.webp`} alt="image of game in action" loading="lazy"/>
								</div>
							</figure>
						</div>
					</div>

					<div className="statsRow" aria-label="Game stats">
						<div className="stat">
							<p className="statNum">26</p>
							<p className="statLabel">nations</p>
						</div>
						<div className="stat">
							<p className="statNum">10-100</p>
							<p className="statLabel">players</p>
						</div>
						<div className="stat">
							<p className="statNum">4</p>
							<p className="statLabel">rotating planets</p>
						</div>
						<div className="stat">
							<p className="statNum">15</p>
							<p className="statLabel">vital resources</p>
						</div>
						<div className="stat">
							<p className="statNum">5</p>
							<p className="statLabel">minute intervals</p>
						</div>
					</div>
				</div>
			</header>

			<section className="section" aria-labelledby="quickstart">
				<div className="wrap">
					<h3 id="quickstart">How Power &amp; Peace works:</h3>
					<p className="micro">
						A live geopolitical ecosystem where diplomacy, logistics, negotiation, and crisis-response happen simultaneously.
					</p>

					<div className="grid two">
						<div className="card">
							<h4>1) Managing a country</h4>
							<p>
								Each team inherits a distinct Nation with its own needs, strengths, and constraints.
								To win, a Nation must increase domestic prosperity while resolving all their crises and international conflicts by the end, making gameplay both collaborative and competitive.
							</p>
						</div>

						<div className="card">
							<h4>2) Resources drive everything</h4>
							<p>
								Just like real life, the economy is a living supply chain. Different trade routes,
								shortages, and partnerships can create both strategic leverage and vulnerability. Players experience the dynamics of supply and demand directly through their actions and decision making.
							</p>
						</div>

						<div className="card">
							<h4>3) It's always everyone's turn</h4>
							<p>
								The <strong>interval clock</strong>, a <strong>5-minute</strong> timer, acts like a universal turn counter for every single piece on the board.
								But if you wait, the world moves without you; the planet rotations dictate certain windows of opportunity.
							</p>
						</div>

						<div className="card">
							<h4>4) Diplomacy is the main mechanic</h4>
							<p>
								Negotiation is constant, and players' conversation- and decision-making skills are under high pressure. Alliances, trade deals, conflict solving, and new crises
								are always shifting the circumstances and occur all in real-time.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section" aria-label="Feature highlights">
				<div className="wrap">
					<div className="featureRow">
						<div className="featureText">
							<h3>Turnless Gameplay</h3>
							<p>
								Power &amp; Peace is uniquely designed so <strong>everyone is always in control</strong>. Unlike the traditional models for game mechanics in turn-based board games and geopolitical simulations, our innovative mechanics facilitate <strong>simultaneous action</strong> from any and all players at once.
								Players stay engaged doing what leaders do: taking action, communicating, adapting, and critical thinking in real time.
							</p>

							<div className="callout">
								<p><strong>No turns</strong> → No down-time or waiting to do something again</p>
								<p><strong>No dice</strong> → No random chance or "gamification"</p>
							</div>
						</div>

						<figure className="featureMedia">
							<div className="imgPlaceholder">
								<img src={`${import.meta.env.BASE_URL}assets/jude6.webp`} alt="image of game in action" loading="lazy"/>
							</div>
						</figure>
					</div>

					<div className="featureRow reverse">
						<div className="featureText">
							<h3>The Game Board</h3>

							<ul className="bullets">
								<li><strong>4 rotating planets</strong> with different terrains, climates, and natural resources</li>
								<li><strong>26 unique nations</strong> from A—Z (modular for smaller groups)</li>
								<li><strong>15 vital resources</strong> with coordinated supply chains and tangible importance</li>
								<li><strong>Natural + geopolitical crises</strong> that disrupt, overwhelm, and require teamwork</li>
								<li><strong>Movement system / piece mechanics</strong> synchronized to the interval clock</li>
								<li><strong>Facilitator-light</strong> so that educators can give individualized attention</li>
							</ul>
						</div>

						<figure className="featureMedia">
							<div className="imgPlaceholder">
								<img src={`${import.meta.env.BASE_URL}assets/board4.webp`} alt="board on table" loading="lazy"/>
							</div>
						</figure>
					</div>

					<div className="featureRow">
						<div className="featureText">
							<h3>Stages of the Simulation</h3>

							<ol className="steps">
								<li><strong>Briefing:</strong> Introducing the Nations, Crises, and four planets,</li>
								<li><strong>Intervals begin:</strong> trade talks, domestic agendas, and logistics emerge immediately.</li>
								<li><strong>Mid-Game Crises hit:</strong> shortages, climate events, and selfish decisions create more conflicts.</li>
								<li><strong>Compounding outcomes:</strong> smart preparation often pays; neglect grows costly.</li>
								<li><strong>Debrief:</strong> students make connections between in-game actions/decision-making and real-world parallels, such as historical events, social systems, and political moves.</li>
							</ol>
						</div>

						<figure className="featureMedia">
							<div className="imgPlaceholder">
								<img src={`${import.meta.env.BASE_URL}assets/Screenshot_141204.webp`} alt="image of game in action" loading="lazy"/>
							</div>
						</figure>
					</div>

					<div className="featureRow reverse">
						<div className="featureText">
							<h3>Educational Outcomes</h3>

							<p>At the core of the game and its exigency are several interdisciplinary skills which we believe current education standards fail to adequately develop. Power & Peace is designed to immerse 21st century students in:</p>

							<ul className="bullets">
								<li><strong>Geopolitical Literacy</strong></li>
								<li><strong>Budgeting and Resource Management</strong></li>
								<li><strong>Macroeconomics</strong></li>
								<li><strong>Negotiation, Diplomacy, and Compromise</strong></li>
								<li><strong>Leadership and Teamwork</strong></li>
							</ul>
						</div>

						<figure className="featureMedia">
							<div className="imgPlaceholder">
								<img src={`${import.meta.env.BASE_URL}assets/9007.webp`} alt="board on table" loading="lazy"/>
							</div>
						</figure>
				</div>
				</div>

			</section>

			<section className="section" aria-labelledby="whyfun">
				<div className="wrap">
					<h3 id="whyfun">Here's how it revolutionizes social studies</h3>
					<p>
						Power &amp; Peace turns big, abstract concepts into concrete decisions: scarcity, supply chains, incentives, trust, conflict, and cooperation.
						Students don’t just learn <em>about</em> geopolitics — they <em>experience</em> the tension of making choices when there’s no perfect answer.
					</p>

					<div className="grid three">
						<div className="card">
							<h4>It rewards creativity</h4>
							<p>Students invent their own deals, solutions, and strategies. Every session has completely unique outcomes.</p>
						</div>
						<div className="card">
							<h4>It creates real stakes</h4>
							<p>With tangible consequences, every interval forces prioritization: which resources and crises demand immediate attention?</p>
						</div>
						<div className="card">
							<h4>It’s social by design</h4>
							<p>Like Model UN layered on top of trading and war-game frameworks, our socialized mechanics create dynamic turnless gameplay.</p>
						</div>
					</div>

					<div className="gallery" aria-label="Photo gallery">
						<figure className="galleryItem">
							<div className="imgPlaceholder"><img src={`${import.meta.env.BASE_URL}assets/board1.webp`} alt="image of board closeup" loading="lazy"/></div>
						</figure>
						<figure className="galleryItem">
							<div className="imgPlaceholder"><img src={`${import.meta.env.BASE_URL}assets/editScreenshot_140814.webp`} alt="image of game in action" loading="lazy"/></div>
							
						</figure>
						<figure className="galleryItem">
							<div className="imgPlaceholder"><img src={`${import.meta.env.BASE_URL}assets/board5.webp`} alt="image of board closeup" loading="lazy"/></div>
						</figure>
						<figure className="galleryItem">
							<div className="imgPlaceholder"><img src={`${import.meta.env.BASE_URL}assets/Screenshot_140935.webp`} alt="playtest action" loading="lazy"/></div>
						</figure>
					</div>
				</div>
			</section>

			<section className="section" aria-labelledby="cta">
				<div className="wrap">
					<div className="ctaBand">
						<h3 id="cta">Want to see how your students would play?</h3>
						<p>Tell us your group size and setting. We’ll recommend a session format and next steps.</p>

						<div className="ctaRow">
							<Link className="btn primary" to="/contact">Request Information</Link>
							<Link className="btn secondary" to="/playtests">View past playtests</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}