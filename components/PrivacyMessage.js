import Container from './Container';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const About = () => {
	return (
		<section className="section-dark success" id="privacy">
			<Container>
				<SectionTitle text="TERMS AND CONDITIONS OF USE" />
				<div>
					<p>
						The content herein is provided on an “as-is” basis WITHOUT WARRANTY
						of any kind, express or implied, including without limitation, any
						warranties concerning accuracy, usefulness, correctness, timeliness,
						or content of information, and we hereby disclaim any and all such
						warranties.
					</p>
					<br />
					<p>
						We shall not be liable for any damage to, or viruses that may
						infect, your computer equipment or other property on account of your
						access to this site.
						<br />
						<br />
					</p>
					<Link href="/" passHref>
						<p className="underlineButton back-home">BACK TO HOMEPAGE</p>
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default About;
