import { useState } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import InvestmentCard from './InvestmentCard';
import styles from '../styles/InvestmentOpportunities.module.scss';

const Careers = () => {
	return (
		<section id="investment-opportunities">
			<Container>
				<SectionTitle text="Investment Opportunities" />
				<div className={styles.investmentContainer}>
					<InvestmentCard />
					<InvestmentCard />
					<InvestmentCard />
				</div>
			</Container>
		</section>
	);
};

export default Careers;
