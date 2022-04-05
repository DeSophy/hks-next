import Image from 'next/image';
import styles from '../styles/Team.module.scss';

const TeamCard = (props) => {
	return (
		<div
			className={`${styles.cardContainer} ${props.animation}`}
			style={{ transform: `translateX(${props.position}%)` }}
		>
			{' '}
			<div className={styles.card}>
				<div className={styles.img}>
					<Image
						src={props.photo}
						alt={props.name}
						layout="responsive"
						width={100}
						height={100}
					/>
				</div>

				<h3>{props.name}</h3>
				<p>{props.title}</p>
				<br />

				<p>Phone: {props.phone}</p>
				<p>Email: {props.email}</p>
				<br />
				<div>
					<p className={styles.bioButton}>Read Bio</p>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
