import React from 'react';
import { BiX } from 'react-icons/bi';
import Image from 'next/image';
import styles from '../styles/Team.module.scss';

const TeamModal = (props) => {
	return (
		<div className={styles.modal} id="bio">
			<div className={styles.closeButton}>
				<BiX onClick={props.close} color="#e63122" size="38px" />
			</div>
			<div className={styles.modalImage}>
				<Image
					src={'https:' + props.photo.fields.file.url}
					alt={props.name}
					className={styles.img}
					layout="responsive"
					width={100}
					height={100}
				/>
				<br />
				<p>Phone: {props.phone}</p>
				<p>Email: {props.email}</p>
			</div>
			<div>
				<h3>{props.name}</h3>
				<p>{props.title}</p>
				<br />
				<p>{props.bio}</p>
			</div>
		</div>
	);
};

export default TeamModal;
