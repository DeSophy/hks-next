import styles from '../styles/NotableTransactions.module.scss';

const Transaction = (props) => {
	return (
		<div className={styles.transactionContainer}>
			<div className={styles.imageContainer}>
				<img src={props.image} />
				<div className={styles.gradient}></div>
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
				<p className={styles.transactionDetail}>{props.type}</p>
			</div>
		</div>
	);
};

export default Transaction;
