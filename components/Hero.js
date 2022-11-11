// Components
import Container from './Container';

// Styles
import styles from '../styles/Hero.module.scss';

const Hero = ({ research, latestClosing }) => {
	return (
		<section className={styles.hero} id="hero">
			<video
				className={styles.heroVideo}
				autoPlay
				loop
				poster="assets/hks-hero-poster.jpg"
			>
				<source src="assets/hks-hero-video.webm" type="video/webm"></source>
			</video>

			<Container>
				<div className={styles.title}>
					<h1>HKS Real Estate Advisors</h1>
					<p>Committed to Delivering the Highest Level of Service</p>
					<ul className={styles.dynamicText}>
						<li>
							<span data-text="Investment Sales &amp; Advisory">
								Investment Sales &amp; Advisory
							</span>
						</li>
						<li>
							<span data-text="Acquisition &amp; Bridge Financing">
								Acquisition &amp; Bridge Financing
							</span>
						</li>
						<li>
							<span data-text="Long Term Fixed and Floating Rate Financing">
								Long Term Fixed and Floating Rate Financing
							</span>
						</li>
						<li>
							<span data-text="Mezzanine and Private Equity">
								Mezzanine and Private Equity
							</span>
						</li>
						<li>
							<span data-text="Construction Financing">
								Construction Financing
							</span>
						</li>
					</ul>
				</div>
			</Container>

			<div className={styles.trackerContainer}>
				<div className={styles.tracker}>
					<div className={styles.trackerField}>
						<p>
							<b>Closed | {latestClosing[0].fields.amount}</b>
						</p>
						<p>{latestClosing[0].fields.text.slice(0, 120) + '...'}</p>
						<a
							target="_blank"
							rel="noreferrer"
							href={latestClosing[0].fields.link}
						>
							<p className="underlineButton">MORE INFO</p>
						</a>
					</div>
					<div className={styles.trackerField}>
						<p>
							<b>{research[0].fields.title}</b>
						</p>
						<p>{research[0].fields.description.slice(0, 120) + '...'}</p>
						<a
							target="_blank"
							rel="noreferrer"
							href={'https:' + research[0].fields.link.fields.file.url}
						>
							<p className="underlineButton">MORE INFO</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
