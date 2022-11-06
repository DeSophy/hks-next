// Components
import Container from './Container';
import SectionTitle from './SectionTitle';
import InvestmentCard from './InvestmentCard';
import MobileScrollindicator from './MobileScrollindicator';

// styles
import styles from '../styles/InvestmentAndReport.module.scss';

const InvestmentOpportunities = ({ listings }) => {
	return (
		<section id="investment-opportunities">
			<Container>
				<SectionTitle text="Investment Opportunities" />
				<div className={styles.investmentContainer}>
					{listings.map((listing) => (
						<InvestmentCard
							key={listing.sys.id}
							title={listing.fields.title}
							description={listing.fields.description}
							photo={listing.fields.photo}
							h1={listing.fields.h1}
							l1={listing.fields.l1}
							h2={listing.fields.h2}
							l2={listing.fields.l2}
							h3={listing.fields.h3}
							l3={listing.fields.l3}
							flyer={listing.fields.flyer}
							web={listing.fields.web}
							confiBroker={listing.fields.confiBroker}
							confiPrincipal={listing.fields.confiPrincipal}
						/>
					))}
				</div>
				<MobileScrollindicator />
			</Container>
		</section>
	);
};

export default InvestmentOpportunities;
