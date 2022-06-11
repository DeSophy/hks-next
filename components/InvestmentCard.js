import React from 'react';
import Image from 'next/image';
import styles from '../styles/InvestmentOpportunities.module.scss';

const InvestmentCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.img}>
				<Image
					src={'/assets/transaction-placeholder.jpg'}
					alt={'props.address'}
					layout="responsive"
					width={400}
					height={256}
				/>
			</div>

			<div className={styles.body}>
				<h4>
					Astoria Value-Add: 34-55 32nd Street | <b>$3,900,000</b>
				</h4>
				<p className={styles.description}>
					4-Story Opportunity Zone asset with 7 free-market units and 1
					restaurant. All seven apartments are 2 bedroom-2 baths, attracting
					middle-class young professionals and families. This corner lot retail
					space is home to New York’s only Welsh restaurant and bar.
				</p>
				<div className={styles.cardBottom}>
					<div className={styles.highlights}>
						<div className={styles.highlight}>
							<p className={styles.bold}>Selling Point 1</p>
							<p>Label</p>
						</div>
						<div className={styles.highlight}>
							<p className={styles.bold}>Selling Point 1</p>
							<p>Label</p>
						</div>
						<div className={styles.highlight}>
							<p className={styles.bold}>Selling Point 1</p>
							<p>Label</p>
						</div>
					</div>
					<div className={styles.buttons}>
						<button className="buttonBlue">Contact Us</button>
						<button className="buttonRed">See Flyer</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestmentCard;
