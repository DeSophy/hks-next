import Container from './Container';
import SectionTitle from './SectionTitle';
import Service from './Service';
import ServicesList from './ServicesList';
import { useState } from 'react';
import styleAbout from '../styles/About.module.scss';

const About = () => {
	const services = ServicesList;

	let [selectedService, setSelectedService] = useState(0);

	const showDescriptionHandler = (index) => {
		setSelectedService(selectedService === index ? null : index);
	};

	return (
		<section id="company">
			<Container>
				<SectionTitle text="About Us" />
				<div className={styleAbout.content}>
					<div className={styleAbout.columnLeft}>
						<p>
							Located in the heart of New York City, HKS Real Estate Advisors is
							the nation's premier real estate advisory firm. With over $1.5
							billion in annual transaction volume, we are committed to
							providing our clients with the highest level of service. We pride
							ourselves on being client advocates first and foremost, and
							conduct ourselves with creativity and integrity. With every closed
							transaction, we sustain our reputation for an unparalleled
							commitment to excellence.
						</p>
						<br />
						<p>
							The principals at HKS have closed over $25 Billion in transactions
							to date. Since our inception, we have been able to provide the
							best-in-class solutions with seamless execution regardless of
							complexity - often succeeding in closing transactions that others
							could not.
						</p>
					</div>
					<div className={styleAbout.columnRight}>
						<h3>Services</h3>
						<div>
							{services.map((service, index) => (
								<Service
									key={service.title}
									title={service.title}
									description={service.description}
									onClick={() => showDescriptionHandler(index)}
									selectedService={selectedService}
									index={index}
								/>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default About;
