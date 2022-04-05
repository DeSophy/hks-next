import Container from './Container';
import SectionTitle from './SectionTitle';
import TeamCard from './TeamCard';
import SliderContainer from './SliderContainer';
import { useState, useEffect } from 'react';
import TeamMembersList from './TeamMembersList';
import styles from '../styles/Team.module.scss';

const Team = () => {
	const members = TeamMembersList;

	return (
		<section className="section-dark" id="team">
			<Container>
				<SectionTitle style={styles.title} text="Meet Our Team" />

				<div className={styles.teamSlider}>
					{members.map((member) => (
						<TeamCard
							key={member.name}
							name={member.name}
							title={member.title}
							phone={member.phone}
							email={member.email}
							photo={member.photo}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Team;
