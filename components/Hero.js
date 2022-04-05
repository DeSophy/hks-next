import { useEffect, useState } from 'react';
import Container from './Container';
import styleHero from '../styles/Hero.module.scss';

const Hero = () => {
	return (
		<section className={styleHero.hero}>
			<video
				className={styleHero.heroVideo}
				autoPlay
				loop
				poster="assets/hks-hero-poster.jpg"
			>
				<source src="assets/hks-hero-video.webm" type="video/webm"></source>
			</video>

			<Container>
				<div className={styleHero.title}>
					<h1>HKS Real Estate Advisors</h1>
					<p>Committed to Delivering the Highest Level of Service</p>
					<ul className={styleHero.dynamicText}>
						<li>
							<span data-text="Investment Sales">Investment Sales</span>
						</li>
						<li>
							<span data-text="Acquisition &amp; Bridge">
								Acquisition &amp; Bridge
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
							<span data-text="Construction">Construction</span>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
