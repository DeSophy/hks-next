import { useState } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import ResearchCard from './ResearchCard';
import ResearchList from './ResearchList';
import styles from '../styles/InvestmentAndReport.module.scss';

const Research = () => {
	const reports = ResearchList;

	return (
		<section className="section-gray" id="research">
			<Container>
				<SectionTitle text="Research" />
				<div className={styles.investmentContainer}>
					{reports.map((report) => (
						<ResearchCard
							key={report.title}
							title={report.title}
							description={report.description}
							photo={report.photo}
							dollar={report.dollar}
							dollarVsLast={report.dollarVsLast}
							dollarVsYear={report.dollarVsYear}
							transaction={report.transaction}
							transactionVsLast={report.transactionVsLast}
							transactionVsYear={report.transactionVsYear}
							property={report.property}
							propertyVsLast={report.propertyVsLast}
							propertyVsYear={report.propertyVsYear}
							qLast={report.qLast}
							qYear={report.qYear}
							link={report.link}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Research;
