import { useState } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import InvestmentCard from './InvestmentCard';
import InvestmentList from './InvestmentList';
import MobileScrollindicator from './MobileScrollindicator';
import styles from '../styles/InvestmentAndReport.module.scss';

const InvestmentOpportunities = () => {
	const listings = InvestmentList;

	return (
		<section id="investment-opportunities">
			<Container>
				<SectionTitle text="Investment Opportunities" />
				<div className={styles.investmentContainer}>
					{listings.map((listing) => (
						<InvestmentCard
							key={listing.title}
							title={listing.title}
							description={listing.description}
							photo={listing.photo}
							h1={listing.h1}
							l1={listing.l1}
							h2={listing.h2}
							l2={listing.l2}
							h3={listing.h3}
							l3={listing.l3}
							flyer={listing.flyer}
							web={listing.web}
						/>
					))}
				</div>
				<MobileScrollindicator />
			</Container>
		</section>
	);
};

export default InvestmentOpportunities;
