import styleTeam from '../styles/Team.module.scss';

const TeamCard = (props) => {
	return (
		<div
			className={`${styleTeam.cardContainer} ${props.animation}`}
			style={{ transform: `translateX(${props.position}%)` }}
		>
			{' '}
			<div className={styleTeam.card}>
				<img src={props.photo} />

				<h3>{props.name}</h3>
				<p>{props.title}</p>
				<br />

				<p>Phone: {props.phone}</p>
				<p>Email: {props.email}</p>
				<br />
				<div>
					<p className={styleTeam.bioButton}>Read Bio</p>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
