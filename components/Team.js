import Container from './Container';
import SectionTitle from './SectionTitle';
import TeamCard from './TeamCard';
import TeamMembersList from './TeamMembersList';
import TeamModal from './TeamModal';
import MobileScrollindicator from './MobileScrollindicator';
import { useState } from 'react';
import styles from '../styles/Team.module.scss';

const Team = () => {
	const members = TeamMembersList;
	const [currentMember, setCurrentMember] = useState(0);

	const [modal, setModal] = useState(false);

	const openModal = (current) => {
		setModal(true);
		setCurrentMember(current);
	};

	const closeModal = () => {
		setModal(false);
	};

	return (
		<section className={'section-dark ' + styles.section} id="team">
			<Container className={styles.teamContainer}>
				<SectionTitle style={styles.title} text="Meet Our Team" />

				{!modal && (
					<div className={styles.teamSlider}>
						{members.map((member, index) => (
							<TeamCard
								key={member.name}
								name={member.name}
								title={member.title}
								phone={member.phone}
								email={member.email}
								photo={member.photo}
								index={index}
								button={openModal}
							/>
						))}
					</div>
				)}

				{modal && (
					<TeamModal
						name={members[currentMember].name}
						title={members[currentMember].title}
						bio={members[currentMember].bio}
						phone={members[currentMember].phone}
						email={members[currentMember].email}
						photo={members[currentMember].photo}
						close={closeModal}
					/>
				)}

				<MobileScrollindicator />
			</Container>
		</section>
	);
};

export default Team;
