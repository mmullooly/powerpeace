// Contact.jsx
import "../styles/contact.css";

export default function Contact(){
	const emailAddress = "james@powerpeace.org";

	const handleCopyEmail = async () => {
		try{
			await navigator.clipboard.writeText(emailAddress);
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
							<a
								className="contact__btn contact__btn--ghost"
								href={`mailto:${emailAddress}?subject=Power%20%26%20Peace%20Inquiry`}
							>
								Email Us
							</a>
						</div>
					</div>
				</div>
			</header>

			{/* Calendar + Email */}
			<section id="book" className="contact__actionRow">
				<div className="contact__container">
					<div className="contact__actionGrid">
						{/* LEFT: Calendar */}
						<div className="contact__actionCard contact__actionCard--calendar">
							<h2 className="contact__sectionTitle">Book a time to talk</h2>
							<p className="contact__sectionText">
								Book a quick call that works with your schedule.
							</p>

							<div className="contact__embedCard contact__embedCard--wide">
								<div className="contact__iframeWrap contact__iframeWrap--tall">
									<iframe
										title="Power & Peace Booking Calendar"
										className="contact__iframe contact__iframe--tall"
										src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XU7o1gOdWU6e8Aot82EwR2feTSBLyYpQu74YYang9OzaVXUqcnZuLf_NXiv7SLk3fvLWVzrHb?gv=true"
									/>
								</div>
							</div>
						</div>

						{/* RIGHT: Email */}
						<div className="contact__actionCard contact__actionCard--email">
							<h2 className="contact__sectionTitle">Prefer email?</h2>
							<p className="contact__sectionText">
								Send us a note and we’ll reply with the most useful next step.
							</p>

							<div className="contact__contactCard contact__contactCard--compact">
								<div className="contact__contactCardTop">
									<div className="contact__contactCardHead">
										<p className="contact__emailLabel">Email</p>
										<a
											className="contact__emailLink"
											href={`mailto:${emailAddress}?subject=Power%20%26%20Peace%20Inquiry`}
										>
											{emailAddress}
										</a>
									</div>

									<div className="contact__contactCardMeta">
										<span className="contact__pill">Replies in 1-2 business days</span>
									</div>
								</div>

								<div className="contact__contactCardActions">
									<a
										className="contact__btn contact__btn--primary contact__btn--small"
										href={`mailto:${emailAddress}?subject=Power%20%26%20Peace%20Inquiry`}
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

							{/* Small fill: Checklist + Mini FAQ */}
							<div className="contact__helperCard">
								<div className="contact__helperHead">
									<h3 className="contact__helperTitle">Fastest way to get help</h3>
									<p className="contact__helperText">
										A couple details let us respond with a clear next step.
									</p>
								</div>

								<ul className="contact__checklist">
									<li>
										<span className="contact__checkDot" aria-hidden="true" />
										<span><strong>You are:</strong> educator / investor / partner / other</span>
									</li>
									<li>
										<span className="contact__checkDot" aria-hidden="true" />
										<span><strong>Goal:</strong> classroom use, pilot, partnership, or overview</span>
									</li>
									<li>
										<span className="contact__checkDot" aria-hidden="true" />
										<span><strong>Timeline:</strong> “this semester”, “just exploring”</span>
									</li>
								</ul>

								<div className="contact__miniFaq">
									<div className="contact__qa">
										<p className="contact__q">What happens next?</p>
										<p className="contact__a">We reply with the right resource (or 2–3 questions) and a recommended next step.</p>
									</div>
								</div>
							</div>

							<div className="contact__signature contact__signature--compact">
								<p className="contact__sigLine"><strong>James T. Mullooly</strong></p>
								<p className="contact__sigLine">Founder, Power &amp; Peace</p>
								<p className="contact__sigLine">Playbright LLC</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Educators / Investors */}
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
								<a
									className="contact__link"
									href={`mailto:${emailAddress}?subject=Educator%20Inquiry%20-%20Power%20%26%20Peace`}
								>
									Email educator questions →
								</a>
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
								<a
									className="contact__link"
									href={`mailto:${emailAddress}?subject=Investor%20/%20Partner%20Inquiry%20-%20Power%20%26%20Peace`}
								>
									Email investor questions →
								</a>
							</div>
						</article>
					</div>
				</div>
			</section>
		</main>
	);
}