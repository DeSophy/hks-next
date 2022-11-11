// Components
import Container from './Container';
import SectionTitle from './SectionTitle';
import ResearchCard from './ResearchCard';
import MobileScrollindicator from './MobileScrollindicator';

// Styles
import styles from '../styles/InvestmentAndReport.module.scss';

const Research = ({ research }) => {
	return (
		<section className="section-gray" id="research">
			<Container>
				<SectionTitle text="Research" />
				<div className={styles.investmentContainer}>
					{research.map((report) => (
						<ResearchCard
							key={report.sys.id}
							title={report.fields.title}
							description={report.fields.description}
							photo={report.fields.photo}
							dollar={report.fields.dollar}
							dollarVsLast={report.fields.dollarVsLast}
							dollarVsYear={report.fields.dollarVsYear}
							transaction={report.fields.transaction}
							transactionVsLast={report.fields.transactionVsLast}
							transactionVsYear={report.fields.transactionVsYear}
							property={report.fields.property}
							propertyVsLast={report.fields.propertyVsLast}
							propertyVsYear={report.fields.propertyVsYear}
							qLast={report.fields.qLast}
							qYear={report.fields.qYear}
							link={report.fields.link}
						/>
					))}
				</div>

				<MobileScrollindicator />
			</Container>
		</section>
	);
};

export default Research;
