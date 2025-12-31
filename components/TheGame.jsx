export default function TheGame(){
	return(
		<main className="page the-game">
			<header className="hero">
				<p className="eyebrow">THE GAME</p>
				<h1>Power &amp; Peace</h1>
				<h2>Turnless. Real-time. Geopolitics played live.</h2>

				<p className="lede">
					Players lead up to <strong>26 nations</strong> across <strong>four rotating planets</strong>, building prosperity while managing the supply chain of <strong>12 vital resources</strong>—all under constant negotiation and a barrage of crises.
				</p>

				<div className="ctaRow">
					<a className="btn primary" href="/contact">Request a demo</a>
					<a className="btn secondary" href="/playtests">See playtests</a>
				</div>
			</header>

			<section className="section" aria-labelledby="quickstart">
				<h3 id="quickstart">How Peace &amp; Power works:</h3>
                <p className="micro">
					A live geopolitical ecosystem where diplomacy, logistics, and crisis-response happen simultaneously.
				</p>

				<div className="grid two">
					<div className="card">
						<h4>1) You run a nation</h4>
						<p>
							Each team represents a nation (A–Z) with its own needs, strengths, and constraints.
							Your goal is to increase prosperity without collapsing your resource pipeline.
						</p>
					</div>

					<div className="card">
						<h4>2) Resources drive everything</h4>
						<p>
							Food. Iron. Oil. And more. The economy is a living supply chain: trade routes,
							shortages, and partnerships create both leverage and vulnerability.
						</p>
					</div>

					<div className="card">
						<h4>3) Time never stops</h4>
						<p>
							A <strong>5-minute interval clock</strong> acts like a universal “tick", rotating the 4 planets.
                            If you wait, the world moves without you.
						</p>
					</div>

					<div className="card">
						<h4>4) Diplomacy is the main mechanic</h4>
						<p>
							Negotiation is constant. Alliances, trade deals, conflict prevention, peacekeeping,
							power plays. Conversations are the engine that changes outcomes.
						</p>
					</div>
				</div>
			</section>

			<div className="splitRow" aria-label="Game details">
				<section className="section splitCol" aria-labelledby="components">
					<h3 id="components">What’s on the table</h3>

					<ul className="bullets">
						<li><strong>4 rotating planets</strong> (a changing geography that forces re-planning)</li>
						<li><strong>26 nations</strong> (flexible for smaller groups)</li>
						<li><strong>12 vital resources</strong> with real supply-chain consequences</li>
						<li><strong>Natural + geopolitical crises</strong> that disrupt, reward preparation, and create moral dilemmas</li>
						<li><strong>Movement / conflict system</strong> synchronized to the interval clock</li>
						<li><strong>Facilitator-light</strong> flow (the system keeps moving; the room drives the story)</li>
					</ul>
				</section>

				<section className="section splitCol" aria-labelledby="session">
					<h3 id="session">What a session feels like</h3>

					<ol className="steps">
						<li><strong>Briefing:</strong> nations, objectives, and the world’s pressure points.</li>
						<li><strong>Intervals begin:</strong> trade talks, alliances, and logistics start immediately.</li>
						<li><strong>Crises hit:</strong> shortages, climate events, and geopolitical flashpoints force choices.</li>
						<li><strong>Compounding outcomes:</strong> smart preparation pays; neglect becomes expensive.</li>
						<li><strong>Debrief:</strong> students connect decisions to systems, incentives, and real-world parallels.</li>
					</ol>
				</section>
			</div>

			<section className="section" aria-labelledby="turnless">
				<h3 id="turnless">What “turnless” really means</h3>
				<p>
					Most strategy games create downtime: you plan, then you wait. Power &amp; Peace is designed so
					<strong> everyone is always in motion</strong>. The planets rotate continuously, and every 5 minute interval updates the simulation conditions.
					Players stay engaged by doing what leaders do: communicating, adapting, and making tradeoffs in real time.
				</p>

				<div className="callout">
					<p><strong>No turns</strong> → no bottlenecks. </p>
                    <p><strong>No dice</strong> → no random chance. Outcomes come from your decisions, coordination, and constraints.</p>
				</div>
			</section>

			<section className="section" aria-labelledby="whyfun">
				<h3 id="whyfun">Educational Call: Why it’s thought-provoking (and fun), What your students will learn</h3>
				<p>
					Power &amp; Peace turns big, abstract concepts into concrete decisions: scarcity, supply chains, incentives, trust, conflict, and cooperation.
					Students don’t just learn <em>about</em> geopolitics - they <em>experience</em> the tension of making choices when there’s no perfect answer.
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
			</section>

			<section className="section" aria-labelledby="cta">
				<div className="ctaBand">
					<h3 id="cta">Want to see how your students would play?</h3>
					<p>Tell us your group size and setting. We’ll recommend a session format and next steps.</p>

					<div className="ctaRow">
						<a className="btn primary" href="/contact">Request Information</a>
						<a className="btn secondary" href="/playtests">View past playtests</a>
					</div>
				</div>
			</section>
		</main>
	)
}