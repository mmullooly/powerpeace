import "../styles/about.css"

export default function About(){

	const gallery = [
        { src: "../src/assets/Screenshot_134135.png", alt: "Working in our old studio" },
        { src: "../src/assets/7482.png", alt: "Design demo prototype" },
		{ src: "../src/assets/drawing.jpg", alt: "Early prototype materials and layout" },
        { src: "../src/assets/7409.png", alt: "Iteration notes and balance adjustments" },
		{ src: "../src/assets/demo.jpg", alt: "Design sketches and systems planning" },
		{ src: "../src/assets/presentation.jpg", alt: "Founder presenting the game concept" },
	]

	return (
		<main className="about">
			{/* TOP: */}
			<section className="about__hero">
				<div className="about__wrap about__heroGrid">
					<div className="about__brand">
						<div className="about__logoRow">
							<div className="about__brandText">
								<p className="about__kicker">Playbright LLC</p>
								<h1 className="about__title">The people behind Power &amp; Peace</h1>
							</div>
						</div>

						<p className="about__lede">
							Founded in October 2024 by <strong>James Mullooly</strong>, Playbright builds products that blend ed-tech, new media, and entertainment to engage young learners and 21st century minds formed in a screen-filled, rapid media environment.
						</p>

						<div className="about__facts">
							<div className="about__fact">
								<p className="about__factLabel">Format</p>
								<p className="about__factValue">Real-time simulation • Turnless • Diceless</p>
							</div>
							<div className="about__fact">
								<p className="about__factLabel">Scale</p>
								<p className="about__factValue">10–100 players • 6–60 hours</p>
							</div>
							<div className="about__fact">
								<p className="about__factLabel">Skills</p>
								<p className="about__factValue">Economics • Diplomacy • Leadership • Social</p>
							</div>
						</div>
					</div>

					<figure className="about__heroMedia">
						<img
							className="about__heroImg"
							src="../src/assets/p1.png"
							alt="Power & Peace in action"
							loading="lazy"
						/>
						<figcaption className="about__caption">
							Power &amp; Peace is made by Playbright LLC.
						</figcaption>
					</figure>
				</div>
			</section>

			{/* MIDDLE: show the method (evidence > adjectives) */}
			<section className="about__section">
				<div className="about__wrap">
					<header className="about__sectionHead">
						<h2 className="about__h2">How it's built</h2>
						<p className="about__sub">
							Power & Peace is the result of ongoing development cycles with strict focus on improving the product for its best possible engagement patterns and educational outcomes.
						</p>
					</header>

					<div className="about__grid3">
						<div className="about__card">
							<p className="about__cardEyebrow">01</p>
							<h3 className="about__h3">Systems first</h3>
							<p className="about__p">
								The core is a live ecosystem driven by supply and demand, logistics, and social mechanics.
								The goal is not reaching “correct answers,” but to practice systems-thinking and sound judgment in realistic problem-solving scenarios.
							</p>
						</div>

						<div className="about__card">
							<p className="about__cardEyebrow">02</p>
							<h3 className="about__h3">Playtested reality</h3>
							<p className="about__p">
								All development is driven by what real groups do: how they play, what they take away, what their educators say,
								and what teachers need to run it smoothly.
							</p>
						</div>

						<div className="about__card">
							<p className="about__cardEyebrow">03</p>
							<h3 className="about__h3">Developed for distribution</h3>
							<p className="about__p">
								We continue to explore scalable modalities to bring this to a wide audience. 
								From the start, game mechanics have been designed for ease of adaptation into digital and/or hybrid mediums.
							</p>
						</div>
					</div>

					<div className="about__gallery">
						{gallery.map((img) => (
							<figure className="about__shot" key={img.src}>
								<img className="about__shotImg" src={img.src} alt={img.alt} loading="lazy" />
							</figure>
						))}
					</div>

					<p className="about__caption about__caption--center">
						Behind the scenes of making of Power &amp; Peace: early sketches and prototypes.
					</p>
				</div>
			</section>

			{/* FOUNDER: one tight, credible paragraph + visual */}
			<section className="about__section about__section--tint">
				<div className="about__wrap about__founderGrid">
					<figure className="about__founderMedia">
						<img
							className="about__founderImg"
							src="../src/assets/IMG_7786.jpg"
							alt="James Mullooly, Founder"
							loading="lazy"
						/>
						<figcaption className="about__caption">
							James Mullooly, Creator of Power & Peace
						</figcaption>
					</figure>

					<div className="about__founderText">
						<span className="blockSpacer" />
						<h2 className="about__h2">James Mullooly</h2>
						<span className="blockSpacer" />
						<p className="about__p">
							James built Playbright around a straightforward question: how can we use gaming to best serve our society? As the creator of Power & Peace, he envisioned a better way for students to interact with the world’s toughest challenges — then built a team, company, and product to make that vision real.

							Mullooly’s academic and creative background is uniquely suited to inventing an innovation of this scope. His academic work in leadership, diplomacy, public administration, arts entrepreneurship, immersive storytelling, war and peace studies, and child development reflects a rare synthesis of skills across international relations, media design, education, and game theory. Graduating Summa Cum Laude, his academic record supports his conceptual vision with intellectual rigor.
						</p>
					</div>
				</div>
			</section>

			{/* PLAYBRIGHT */}
<section className="about__section">
	<div className="about__wrap">
		<header className="about__sectionHead">
			<h2 className="about__h2">Playbright LLC</h2>
			<p className="about__sub">
				Power &amp; Peace is led by founder James Mullooly and built by an interdisciplinary team,
				with guidance from a six-member Advisory Board.
			</p>
		</header>

		<div className="about__orgGrid">
			{/* Team */}
			<div className="about__orgCard">
				<p className="about__orgEyebrow">Core Team</p>
				<h3 className="about__orgTitle">Interdisciplinary by design</h3>
				<p className="about__p">
					Playbright brings together experienced designers, software developers, and computer engineers around our vision of
					 innovative learning games. Playbright's team consists of award-winning artists and developers with backgrounds in:
				</p>

				<ul className="about__bullets">
					<li>Game development and playtesting</li>
					<li>Software infrastructure and microarchitecture</li>
					<li>UX and visual design</li>
					<li>OS and RTL design</li>
				</ul>
				<div className="about__mission">
					<p className="about__orgEyebrow">The mission</p>
					<p className="about__p">
						The education landscape is changing — experiential learning is becoming increasingly valuable and sought after by teachers, schools, and districts. Playbright designs interactive
						learning experiences that meet this moment with an evolution of game mechanics and education simulation quality.
					</p>
				</div>
			</div>

			{/* Advisory Board */}
			<div className="about__orgCard">
				<p className="about__orgEyebrow">Advisory Board</p>
				<h3 className="about__orgTitle">Experts guiding the build</h3>
				<p className="about__p">
					Supporting Playbright is our Advisory Board, a global network of educators with key expertise in curriculum assessment, geopolitical education game design, and project commercialization.
				</p>
                <div className="about__advisorList" role="list">
					<div className="about__advisorLine about__advisorLine--and" aria-hidden="true">
						<span className="about__advisorAnd">featuring</span>
					</div>
					<div className="about__advisorLine" role="listitem">
						<p className="about__advisorText">
							<strong>John Hunter,</strong> creator of the World Peace Game + Foundation
						</p>
					</div>
				<div className="about__advisorLine" role="listitem">
					<p className="about__advisorText">
						<strong>Ben Lawless,</strong> Melbourne University, learning game designer
					</p>
				</div>
				<div className="about__advisorLine" role="listitem">
						<p className="about__advisorText">
							<strong>Dr. M. Anne Visser,</strong> UC Davis, education assessment researcher
						</p>
				</div>
				<div className="about__advisorLine" role="listitem">
						<p className="about__advisorText">
							<strong>Dr. J. Michael Curry,</strong> Goucher College, academic program creator
						</p>
				</div>
				<div className="about__advisorLine" role="listitem">
						<p className="about__advisorText">
							<strong>Dr. James J. Mullooly,</strong> CSU Fresno, JSARD founder, curriculum analyst
						</p>
				</div>
				<div className="about__advisorLine" role="listitem">
						<p className="about__advisorText">
							<strong>Dr. Sonja Bozic,</strong> NYC, Serbian director and new media developer
						</p>
				</div>
			</div>
		</div>
		</div>
	</div>
</section>

			{/* CLOSE: calm CTA */}
			<section className="about__close">
				<div className="about__wrap about__closeGrid">
					<div>
						<h2 className="about__h2">Let’s build together</h2>
						<p className="about__p">
							If you’re an educator exploring adoption or a partner/investor exploring collaboration, reach out to see all the details:
							the demos, the numbers, the roadmap, etc.
						</p>
					</div>

					<div className="about__actions">
						<a className="about__btn about__btn--primary" href="/contact">Get in Touch</a>
						<a className="about__btn about__btn--ghost" href="/">Back to Home</a>
					</div>
				</div>
			</section>
		</main>
	)
}