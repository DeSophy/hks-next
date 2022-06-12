import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/InvestmentAndReport.module.scss';

const InvestmentCard = (props) => {
	return (
		<div className={styles.card}>
			<div className={styles.img}>
				<Image
					src={props.photo}
					alt={props.title}
					layout="responsive"
					width={400}
					height={256}
				/>

				<div className="gradient"></div>
			</div>

			<div className={styles.body}>
				<h4>{props.title}</h4>
				<p className={styles.description}>
					{props.description.length > 350
						? props.description.slice(0, 350) + '...'
						: props.description}
				</p>
				<div className={styles.cardBottom}>
					<div className={styles.highlights}>
						<div className={styles.highlight}>
							<p className={styles.bold}>{props.h1}</p>
							<p>{props.l1}</p>
						</div>
						<div className={styles.highlight}>
							<p className={styles.bold}>{props.h2}</p>
							<p>{props.l2}</p>
						</div>
						<div className={styles.highlight}>
							<p className={styles.bold}>{props.h3}</p>
							<p>{props.l3}</p>
						</div>
					</div>
					<div className={styles.buttons}>
						<a href="mailto:pcarillo@hks.com">
							<button className="buttonBlue">Contact Us</button>
						</a>
						{props.flyer && (
							<a target="_blank" rel="noreferrer" href={props.flyer}>
								<button className="buttonRed">See Flyer</button>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestmentCard;
