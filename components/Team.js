import Container from './Container';
import SectionTitle from './SectionTitle';
import TeamCard from './TeamCard';
import SliderContainer from './SliderContainer';
import { useState, useEffect } from 'react';
import TeamMembersList from './TeamMembersList';
import styleTeam from '../styles/Team.module.scss';

const Team = () => {
	const members = TeamMembersList;

	const [firstMember, setFirstMember] = useState(0);
	const [lastMember, setLastMember] = useState(3);

	// Responsive

	const resize = () => {
		setFirstMember(0);

		if (window.innerWidth < 769) {
			setLastMember(firstMember + 1);
		} else if (window.innerWidth >= 769 && window.innerWidth < 1025) {
			setLastMember(firstMember + 2);
		} else {
			setLastMember(firstMember + 3);
		}
	};

	useEffect(() => {
		// Resizing the screen

		window.addEventListener('resize', () => {
			resize();
		});

		// Onload
		resize();

		window.removeEventListener('resize', () => {
			resize();
		});
	});

	return (
		<section className="section-dark" id="team">
			<Container>
				<SectionTitle style={styleTeam.title} text="Meet Our Team" />

				<SliderContainer
					data={members}
					firstItem={firstMember}
					setFirstItem={setFirstMember}
					lastItem={lastMember}
					setLastItem={setLastMember}
				>
					{members.slice(firstMember, lastMember).map((member) => (
						<TeamCard
							key={member.name}
							name={member.name}
							title={member.title}
							phone={member.phone}
							email={member.email}
							photo={member.photo}
						/>
					))}
				</SliderContainer>
			</Container>
		</section>
	);
};

export default Team;
