import styles from '../styles/NotableTransactions.module.scss';
import Image from 'next/image';

const Transaction = (props) => {
	return (
		<div className={styles.transactionContainer}>
			<div className={styles.imageContainer}>
				<Image
					src={props.image}
					alt={props.address}
					className={styles.img}
					layout="responsive"
					width={400}
					height={256}
				/>
				<div className="gradient"></div>
			</div>
			<div className={styles.body}>
				<p className={styles.transactionTitle}>
					{props.address.length > 24 && props.category === 'Investment Sales'
						? props.address.slice(0, 24) + '...'
						: props.address}
				</p>
				{props.category !== 'Investment Sales' ? (
					''
				) : (
					<p className={styles.transactionDetail}>
						{props.neighbourhood}
						<br />
						{props.borough}
					</p>
				)}
				<p className={styles.transactionDetail}>
					{props.type} / <b>{props.price}</b>
				</p>
			</div>
		</div>
	);
};

export default Transaction;
