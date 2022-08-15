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
							<b>Closed | $12,000,000</b>
						</p>
						<p>
							John Harrington has closed a refinance of three contiguous
							properties comprised of 14 residential units and 2 commercial
							units in Harlem, New York.
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/p/Cg47SxPLe5S/"
						>
							<p className="underlineButton">MORE INFO</p>
						</a>
					</div>
					<div className={styles.trackerField}>
						<p>
							<b>Market Report | NYC Q2 2022</b>
						</p>
						<p>
							The second quarter has been one of dichotomies. On the one hand,
							NYC experienced a bumper period for investment sales volume,
							clocking at $8.5B for the quarter ending June 30....
						</p>
						<a
							target="_blank"
							rel="noreferrer"
							href="/assets/reports/HKS_Report_Q2_2022.pdf"
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
