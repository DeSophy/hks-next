import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import styles from '../styles/Hero.module.scss';

const Hero = () => {
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
							<span data-text="Permanent Finance">Permanent Finance</span>
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
							<b>Closed | $7,000,000</b>
						</p>
						<p>
							Charles Yellen has closed a 10-year fixed-rate refinance of a
							139-unit Co-Op building in Westchester, New York.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/p/CeofCC7sFOF/?utm_source=ig_web_copy_link"
						>
							<p className="underlineButton">MORE INFO</p>
						</a>
					</div>
					<div className={styles.trackerField}>
						<p>
							<b>Just Closed | $2,100,000</b>
						</p>
						<p>
							Daniel Kowalsky and Max Ralby have closed a refinance of a
							mixed-use asset located in Newark…
						</p>
						<a target="_blank" rel="noreferrer" href="#">
							<p className="underlineButton">MORE INFO</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
