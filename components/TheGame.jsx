import "../styles/game.css"

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
						<a className="btn primary" href="/contact">Schedule a playtest</a>
						<a className="btn secondary" href="/playtests">Past playtests</a>
					</div>

					<div className="heroMedia" aria-label="Game visuals">
						<figure className="media primary">
							<div className="imgPlaceholder">
								<img src="../src/assets/9370.png" alt="image of game in action"/>
							</div>
							<figcaption>A real-time simulation game where simultaneously collaborative and competitive diplomacy is the core gameplay element.</figcaption>
						</figure>

						<div className="mediaStack">
							<figure className="media">
								<div className="imgPlaceholder">
									<img src="../src/assets/board2.png" alt="Board closeup"/>
								</div>
							</figure>
							<figure className="media">
								<div className="imgPlaceholder">
									<img src="../src/assets/jude4c.jpeg" alt="image of game in action"/>
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
								Each team inherits a unique Nation (A–Z) with its own needs, strengths, and constraints.
								The goal is to increase prosperity without collapsing your economy, all while resolving your international conflicts.
							</p>
						</div>

						<div className="card">
							<h4>2) Resources drive everything</h4>
							<p>
								Just like real life, the economy is a living supply chain. Different trade routes,
								shortages, and partnerships can create both strategic leverage and vulnerability.
							</p>
						</div>

						<div className="card">
							<h4>3) It's always everyones' turn</h4>
							<p>
								The <strong>interval clock</strong>, a <strong>5-minute</strong> timer, acts like a universal turn counter for every single piece on the board.
								But if you wait, the world moves without you; the planet rotations dictate certain windows of opportunity.
							</p>
						</div>

						<div className="card">
							<h4>4) Diplomacy is the main mechanic</h4>
							<p>
								Negotiation is constant, and players' conversation- and decision-making skills are under high pressure. Alliances, trade deals, conflict solving, and new crises
								are always shifting the circumtances and occur all in real-time.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section" aria-label="Feature highlights">
				<div className="wrap">
					<div className="featureRow">
						<div className="featureText">
							<h3>What “turnless” really means</h3>
							<p>
								Power &amp; Peace is designed so <strong> everyone is always in control</strong>. Unlike the traditional model of turn-based geopolitical games, our innovative game mechanics facilitate simultaenous action from any and all players at once.
								Players stay engaged doing what leaders do: taking action, communicating, adapting, and critical thinking in real time.
							</p>

							<div className="callout">
								<p><strong>No turns</strong> → No down-time or waiting to do something again. Players can act at any time.</p>
								<p><strong>No dice</strong> → No random chance or "gamification". Outcomes come from decisions, coordination, and constraints.</p>
							</div>
						</div>

						<figure className="featureMedia">
							<div className="imgPlaceholder">
								<img src="../src/assets/jude6.jpeg" alt="image of game in action"/>
							</div>
						</figure>
					</div>

					<div className="featureRow reverse">
						<div className="featureText">
							<h3>What’s on the table</h3>

							<ul className="bullets">
								<li><strong>4 rotating planets</strong> (a changing geography that forces re-planning)</li>
								<li><strong>26 nations</strong> (flexible for smaller groups)</li>
								<li><strong>12 vital resources</strong> with real supply-chain consequences</li>
								<li><strong>Natural + geopolitical crises</strong> that disrupt, reward preparation, and create moral dilemmas</li>
								<li><strong>Movement / conflict system</strong> synchronized to the interval clock</li>
								<li><strong>Facilitator-light</strong> flow (the system keeps moving; the room drives the story)</li>
							</ul>
						</div>

						<figure className="featureMedia">
							<div className="imgPlaceholder">
								<img src="../src/assets/board4.jpeg" alt="board on table"/>
							</div>
						</figure>
					</div>

					<div className="featureRow">
						<div className="featureText">
							<h3>What a session feels like</h3>

							<ol className="steps">
								<li><strong>Briefing:</strong> nations, objectives, and the world’s pressure points.</li>
								<li><strong>Intervals begin:</strong> trade talks, alliances, and logistics start immediately.</li>
								<li><strong>Crises hit:</strong> shortages, climate events, and geopolitical flashpoints force choices.</li>
								<li><strong>Compounding outcomes:</strong> smart preparation pays; neglect becomes expensive.</li>
								<li><strong>Debrief:</strong> students connect decisions to systems, incentives, and real-world parallels.</li>
							</ol>
						</div>

						<figure className="featureMedia">
							<div className="imgPlaceholder">
								<img src="../src/assets/jude2.jpeg" alt="image of game in action"/>
							</div>
						</figure>
					</div>
				</div>
			</section>

			<section className="section" aria-labelledby="whyfun">
				<div className="wrap">
					<h3 id="whyfun">Why it’s thought-provoking (and fun)</h3>
					<p>
						Power &amp; Peace turns big, abstract concepts into concrete decisions: scarcity, supply chains, incentives, trust, conflict, and cooperation.
						Students don’t just learn <em>about</em> geopolitics — they <em>experience</em> the tension of making choices when there’s no perfect answer.
					</p>

					<div className="grid three">
						<div className="card">
							<h4>It rewards creativity</h4>
							<p>Students invent deals, coalitions, and strategies that no script could predict.</p>
						</div>
						<div className="card">
							<h4>It creates real stakes</h4>
							<p>Every interval forces prioritization: protect people, stabilize resources, or gain leverage.</p>
						</div>
						<div className="card">
							<h4>It’s social by design</h4>
							<p>Diplomacy is the core loop. Communication skills are not optional.</p>
						</div>
					</div>

					<div className="gallery" aria-label="Photo gallery">
						<figure className="galleryItem">
							<div className="imgPlaceholder"><img src="../src/assets/board1.jpeg" alt="image of board closeup"/></div>
						</figure>
						<figure className="galleryItem">
							<div className="imgPlaceholder"><img src="../src/assets/9007.png" alt="image of game in action"/></div>
							
						</figure>
						<figure className="galleryItem">
							<div className="imgPlaceholder"><img src="../src/assets/board5.jpeg" alt="image of board closeup"/></div>
						</figure>
						<figure className="galleryItem">
							<div className="imgPlaceholder"><img src="../src/assets/talk.jpg" alt="founder presenting"/></div>
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
							<a className="btn primary" href="/contact">Request Information</a>
							<a className="btn secondary" href="/playtests">View past playtests</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}