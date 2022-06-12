import Container from './Container';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const About = () => {
	return (
		<section className="section-dark success" id="success">
			<Container>
				<SectionTitle text="Thank you!" />
				<div>
					<p>
						Thank you for reaching out. Someone from our team will reach out as
						soon as possible.
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
