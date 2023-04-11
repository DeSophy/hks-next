import { useState, useRef } from 'react'

// Components
import Container from './Container'
import SectionTitle from './SectionTitle'
import TeamCard from './TeamCard'
import TeamModal from './TeamModal'
import MobileScrollindicator from './MobileScrollindicator'
import SliderContainer from './SliderContainer'

// styles
import styles from '../styles/Team.module.scss'

const Team = ({ teamMembers }) => {
	const [currentMember, setCurrentMember] = useState(0)

	const [modal, setModal] = useState(false)

	const [hidden, setHidden] = useState('')

	const openModal = current => {
		setModal(true)
		setCurrentMember(current)
		setHidden('hidden')
	}

	const closeModal = () => {
		setModal(false)
		setHidden('')
	}

	const sliderRef = useRef()

	return (
		<section className={'section-dark ' + styles.section} id='team'>
			<Container className={styles.teamContainer}>
				<SectionTitle style={styles.title} text='Meet Our Team' />

				<SliderContainer hidden={hidden} slider={sliderRef}>
					<div ref={sliderRef} className={styles.teamSlider}>
						{teamMembers.map((member, index) => (
							<TeamCard
								key={member.sys.id}
								name={member.fields.name}
								title={member.fields.title}
								phone={member.fields.phone}
								email={member.fields.email}
								photo={member.fields.photo}
								index={index}
								button={openModal}
							/>
						))}
					</div>
				</SliderContainer>

				{modal && (
					<TeamModal
						name={teamMembers[currentMember].fields.name}
						title={teamMembers[currentMember].fields.title}
						bio={teamMembers[currentMember].fields.bio}
						phone={teamMembers[currentMember].fields.phone}
						email={teamMembers[currentMember].fields.email}
						photo={teamMembers[currentMember].fields.photo}
						close={closeModal}
					/>
				)}

				<MobileScrollindicator />
			</Container>
		</section>
	)
}

export default Team
