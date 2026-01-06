import "../styles/contact.css";

export default function Contact(){
	const handleCopyEmail = async () => {
		try{
			await navigator.clipboard.writeText("james@powerpeace.org");
		}catch(err){
			// Silent fail (clipboard can be blocked). The mailto still works.
			console.error(err);
		}
	};

	return(
		<main className="contact" id="top">
			<header className="contact__heroWrap">
				<div className="contact__hero">
					<div className="contact__heroInner">
						<h1 className="contact__title">Let's Connect</h1>
						<p className="contact__subtitle">
							Whether you’re bringing it to students or backing the mission, we’ll meet you with a clear next step.
						</p>

						<div className="contact__ctaRow">
							<a className="contact__btn contact__btn--primary" href="#book">
								Book a Call
							</a>
							<a className="contact__btn contact__btn--ghost" href="mailto:james@powerpeace.org?subject=Power%20%26%20Peace%20Inquiry">
								Email Us
							</a>
						</div>
					</div>
					</div>
				</header>

			<section className="contact__gridSection">
				<div className="contact__container">
					<div className="contact__grid">
						<article className="contact__card">
							<h2 className="contact__cardTitle">For educators</h2>
							<p className="contact__cardText">
								Bring a serious, modern, discussion-driven game into your classroom with a format that fits your schedule.
							</p>

							<ul className="contact__bullets">
								<li>Classroom-ready implementation options</li>
								<li>Guidance on facilitation and pacing</li>
								<li>Help selecting the best modality for your students</li>
							</ul>

							<div className="contact__cardActions">
								<a className="contact__link" href="#book">Book an educator walkthrough →</a>
								<a className="contact__link" href="mailto:james@powerpeace.org?subject=Educator%20Inquiry%20-%20Power%20%26%20Peace">Email educator questions →</a>
							</div>
						</article>

						<article className="contact__card">
							<h2 className="contact__cardTitle">For investors &amp; partners</h2>
							<p className="contact__cardText">
								Power &amp; Peace is positioned to modernize geopolitical education while building a commercially viable enterprise.
								If you share the vision, let’s connect.
							</p>

							<ul className="contact__bullets">
								<li>Clear market need: experiential + outcomes-driven learning</li>
								<li>Distribution pathways: schools, programs, organizations</li>
								<li>Partner opportunities across channels and regions</li>
							</ul>

							<div className="contact__cardActions">
								<a className="contact__link" href="#book">Book an investor/partner call →</a>
								<a className="contact__link" href="mailto:james@powerpeace.org?subject=Investor%20/%20Partner%20Inquiry%20-%20Power%20%26%20Peace">Email investor questions →</a>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section className="contact__details">
				<div className="contact__container">
					<h2 className="contact__sectionTitle">Prefer email?</h2>
					<p className="contact__sectionText">
						Send us a note and we’ll reply with the most useful next step.
					</p>

					<div className="contact__contactCard">
						<div className="contact__contactCardTop">
							<div className="contact__contactCardHead">
								<p className="contact__emailLabel">Email</p>
								<a
									className="contact__emailLink"
									href="mailto:james@powerpeace.org?subject=Power%20%26%20Peace%20Inquiry"
								>
									james@powerpeace.org
								</a>
							</div>

							<div className="contact__contactCardMeta">
								<span className="contact__pill">Replies in 1-2 business days</span>
							</div>
						</div>

						<div className="contact__contactCardActions">
							<a
								className="contact__btn contact__btn--primary contact__btn--small"
								href="mailto:james@powerpeace.org?subject=Power%20%26%20Peace%20Inquiry"
							>
								Compose Email
							</a>
							<button
								type="button"
								className="contact__btn contact__btn--ghost contact__btn--small contact__copyBtn"
								onClick={handleCopyEmail}
							>
								Copy address
							</button>
						</div>
					</div>
				</div>
			</section>

			<section id="book" className="contact__booking">
				<div className="contact__container">
					<div className="contact__bookingHeader">
						<h2 className="contact__sectionTitle">Book a time to talk</h2>
						<p className="contact__sectionText">
							Book a quick call that works with your schedule.
						</p>
					</div>

					<div className="contact__embedCard">
						<div className="contact__iframeWrap">
							<iframe
								title="Power & Peace Booking Calendar"
								className="contact__iframe"
								src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XU7o1gOdWU6e8Aot82EwR2feTSBLyYpQu74YYang9OzaVXUqcnZuLf_NXiv7SLk3fvLWVzrHb?gv=true"
							/>
						</div>
					</div>

					<div className="contact__signature">
						<p className="contact__sigLine"><strong>James T. Mullooly</strong></p>
						<p className="contact__sigLine">Founder, Power &amp; Peace</p>
						<p className="contact__sigLine">Playbright LLC</p>
					</div>
				</div>
			</section>
		</main>
	);
}