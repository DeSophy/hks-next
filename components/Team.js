import Container from './Container';
import SectionTitle from './SectionTitle';
import TeamCard from './TeamCard';
import TeamMembersList from './TeamMembersList';
import TeamModal from './TeamModal';
import MobileScrollindicator from './MobileScrollindicator';
import { useState, useRef } from 'react';
import SliderContainer from './SliderContainer';
import styles from '../styles/Team.module.scss';

const Team = () => {
	const members = TeamMembersList;
	const [currentMember, setCurrentMember] = useState(0);

	const [modal, setModal] = useState(false);

	const [hidden, setHidden] = useState('');

	const openModal = (current) => {
		setModal(true);
		setCurrentMember(current);
		setHidden('hidden');
	};

	const closeModal = () => {
		setModal(false);
		setHidden('');
	};

	const sliderRef = useRef();

	console.log(sliderRef.current);

	return (
		<section className={'section-dark ' + styles.section} id="team">
			<Container className={styles.teamContainer}>
				<SectionTitle style={styles.title} text="Meet Our Team" />

				<SliderContainer hidden={hidden} slider={sliderRef.current}>
					<div ref={sliderRef} className={styles.teamSlider}>
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
				</SliderContainer>

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
