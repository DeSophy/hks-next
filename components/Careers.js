import { useState } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { BiPlus } from 'react-icons/bi';
import styleAbout from '../styles/About.module.scss';

const Careers = () => {
	const opportunities = [
		{ position: 'Investment Sales Associate' },
		{ position: 'Commercial Finance Associate' },
		{ position: 'Commercial Mortgage Broker' },
		{ position: 'Internship Program' },
	];

	return (
		<section id="careers">
			<Container>
				<SectionTitle text="Work With Us" />
				<div className={styleAbout.content}>
					<div className={styleAbout.columnLeft}>
						<p>
							At HKS, we seek a wide assortment of people from different
							backgrounds, universities and degree disciplines- the more diverse
							the team, the more new ideas they will convey to the firm. The
							vital skills we look for, however, are the same in everyone and we
							pursue individuals who can validate the following:
						</p>
						<br />
						<p className="italic">
							- Impeccable communication skills
							<br />- Drive and ambition
							<br />- Sound judgment
							<br />- Creativity
							<br />- Execution fineness
							<br />- Presence
							<br />- Teamwork
							<br />- Numeracy
						</p>
					</div>
					<div className={styleAbout.columnRight}>
						<p>
							To be considered for one of the positions enumerated below, please
							send a resume and a short cover letter to employment@hks.com. Only
							candidates under consideration will be contacted. HKS Real Estate
							Advisors is an Equal Opportunity Employer.
						</p>
						<br />
						<h3>Current Opportunities</h3>
						<div>
							{opportunities.map((opportunity, index) => (
								<div
									key={opportunity.position + index}
									className={styleAbout.opportunityTitleContainer}
								>
									<BiPlus color="#e63122" size="24px" />
									<h4 className={styleAbout.opportunityTitle}>
										{opportunity.position}
									</h4>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Careers;
