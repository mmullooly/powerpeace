import "../styles/about.css"

export default function About(){

	const gallery = [
        { src: "../src/assets/starter.jpeg", alt: "Early prototype materials and layout" },
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
							Founded in October 2024 by <strong>James Mullooly</strong>, Playbright builds learning experiences that treat
							complex systems with respect: real incentives, real tradeoffs, real collaboration.
						</p>

						<div className="about__facts">
							<div className="about__fact">
								<p className="about__factLabel">Format</p>
								<p className="about__factValue">Real-time, simultaneous simulation</p>
							</div>
							<div className="about__fact">
								<p className="about__factLabel">Scale</p>
								<p className="about__factValue">10–100 players</p>
							</div>
							<div className="about__fact">
								<p className="about__factLabel">Focus</p>
								<p className="about__factValue">Economics • diplomacy • leadership • systems</p>
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
							This product is the result of ongoing repeated cycles: prototype → playtest → revise.
						</p>
					</header>

					<div className="about__grid3">
						<div className="about__card">
							<p className="about__cardEyebrow">01</p>
							<h3 className="about__h3">Systems first</h3>
							<p className="about__p">
								The core is a live ecosystem: decisions overlap, information is imperfect, and outcomes emerge from interaction.
								The design goal is not “correct answers,” but durable judgment.
							</p>
						</div>

						<div className="about__card">
							<p className="about__cardEyebrow">02</p>
							<h3 className="about__h3">Playtested reality</h3>
							<p className="about__p">
								Each iteration is driven by what real groups do: where they coordinate, where they freeze, where strategies appear,
								and what teachers actually need to run it smoothly.
							</p>
						</div>

						<div className="about__card">
							<p className="about__cardEyebrow">03</p>
							<h3 className="about__h3">Packaged for adoption</h3>
							<p className="about__p">
								We continue to iterate and explore scalable modalities to bring this to a wider audience.
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
						<h2 className="about__h2">James Mullooly</h2>
						<p className="about__p">
							James built Playbright around a straightforward question: what if students could practice navigating modern geopolitics
							the way it actually feels—fast, interdependent, and social? His academic and creative work spans leadership, diplomacy,
							immersive storytelling, and child development, bringing the right mix of systems thinking and human-centered design to the product.
						</p>

						<div className="about__miniGrid">
							<div className="about__mini">
								<p className="about__miniLabel">Design principle</p>
								<p className="about__miniValue">Students learn by doing, negotiating, and adapting.</p>
							</div>
							<div className="about__mini">
								<p className="about__miniLabel">What stays constant</p>
								<p className="about__miniValue">Clarity, fairness, and meaningful consequences.</p>
							</div>
						</div>
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
				with guidance from a five-member Advisory Board.
			</p>
		</header>

		<div className="about__orgGrid">
			{/* Team */}
			<div className="about__orgCard">
				<p className="about__orgEyebrow">Core Team</p>
				<h3 className="about__orgTitle">Interdisciplinary by design</h3>
				<p className="about__p">
					Playbright brings together game and product design, software development, systems thinking,
					and classroom-centered learning design. Playbright's team consists of award-winning artists and engineers with expertise in:
				</p>

				<ul className="about__bullets">
					<li>Game &amp; systems design</li>
					<li>Software &amp; technical infrastructure</li>
					<li>UX and visual design</li>
					<li>Education alignment and usability</li>
				</ul>
			</div>

			{/* Advisory Board */}
			<div className="about__orgCard">
				<p className="about__orgEyebrow">Advisory Board</p>
				<h3 className="about__orgTitle">Experts guiding the build</h3>
				<p className="about__p">
					Our five member Advisory Board supports Playbright with national experts in education, curriculum assessment, commercialization, and game design.
				</p>
                <div className="about__advisorList" role="list">
					<div className="about__advisorLine" role="listitem">
						<p className="about__advisorText">
							<strong>John Hunter,</strong> creator of World Peace Game
						</p>
				</div>

				<div className="about__advisorLine about__advisorLine--and" aria-hidden="true">
					<span className="about__advisorAnd">and</span>
				</div>

				<div className="about__advisorLine" role="listitem">
					<p className="about__advisorText">
						<strong>Ben Lawless,</strong> geopolitical education game designer
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
							If you’re an educator exploring adoption, or a partner/investor exploring collaboration, we’ll share the materials that matter:
							demos, playtest learnings, and the roadmap.
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