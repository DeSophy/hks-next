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
							<span data-text="Investment Sales &amp; Advisory">Investment Sales &amp; Advisory</span>
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
							<span data-text="Construction Financing">Construction Financing</span>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
