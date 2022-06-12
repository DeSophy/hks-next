import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/InvestmentAndReport.module.scss';

const ResearchCard = (props) => {
	return (
		<div className={styles.card}>
			<div className={styles.img}>
				<Image
					src={props.photo}
					alt={props.title}
					layout="responsive"
					width={504}
					height={481}
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
							<p className={styles.volume}>{props.dollar}</p>
							<p>Dollar Volume</p>
							<br />
							<p>
								<b>{props.dollarVsLast}</b> vs {props.qLast}
							</p>
							<p>
								<b>{props.dollarVsYear}</b> vs {props.qYear}
							</p>
						</div>
						<div className={styles.highlight}>
							<p className={styles.volume}>{props.transaction}</p>
							<p>Transaction Volume</p>
							<br />
							<p>
								<b>{props.transactionVsLast}</b> vs {props.qLast}
							</p>
							<p>
								<b>{props.transactionVsYear}</b> vs {props.qYear}
							</p>
						</div>
						<div className={styles.highlight}>
							<p className={styles.volume}>{props.property}</p>
							<p>Property Volume</p>
							<br />
							<p>
								<b>{props.propertyVsLast}</b> vs {props.qLast}
							</p>
							<p>
								<b>{props.propertyVsYear}</b> vs {props.qYear}
							</p>
						</div>
					</div>
					<div className={styles.buttons}>
						<a target="_blank" rel="noreferrer" href={props.link}>
							<button className="buttonRed">Download Report</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResearchCard;

// 							dollar={report.dollar}
// 							dollarVsLast={report.dollarVsLast}
// 							dollarVsYear={report.dollarVsYear}
// 							transaction={report.transaction}
// 							transactionVsLast={report.transactionVsLast}
// 							transactionVsYear={report.transactionVsYear}
// 							property={report.property}
// 							propertyVsLast={report.propertyVsLast}
// 							propertyVsYear={report.propertyVsYear}
// 							qLast={report.qLast}
// 							qYear={report.qYear}
// 							link={report.link}
