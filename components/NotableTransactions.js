import { useState } from 'react';

// components
import Container from './Container';
import SectionTitle from './SectionTitle';
import TransactionCard from './TransactionCard';
import MobileScrollindicator from './MobileScrollindicator';
import TransactionsList from './TransactionsList';
import NotableTransactionsFilters from './NotableTransactionsFilters';

// styles
import styles from '../styles/NotableTransactions.module.scss';

const NotableTransactions = ({ notableTransactions }) => {
	const [transactions, setTransactions] = useState(
		notableTransactions.filter(
			(transaction) => transaction.fields.category === 'Investment Sales'
		)
	);

	return (
		<section
			className={'section-dark ' + styles.section}
			id="notable-transactions"
		>
			<Container>
				<SectionTitle style={styles.title} text="Notable Transactions" />
				<div className={styles.container}>
					<NotableTransactionsFilters
						setTransactions={setTransactions}
						notableTransactions={notableTransactions}
					/>

					<div className={styles.transactions}>
						<div className={styles.transactionsContainer}>
							{transactions.map((transaction) => (
								<TransactionCard
									key={transaction.sys.id}
									address={transaction.fields.address}
									neighbourhood={transaction.fields.neighbourhood}
									borough={transaction.fields.borough}
									type={transaction.fields.type}
									image={transaction.fields.image}
									category={transaction.fields.category}
									price={transaction.fields.price}
								/>
							))}
						</div>

						{/* <div className="bullets">
							{transactions
								.filter((_, index) => (index + 1) % lastTransaction === 1)
								.map((_, index) => (
									<Bullet
										key={index}
										selectedBullet={selectedBullet}
										index={index}
										onClick={() => transactionsHandler(index)}
									/>
								))}
						</div> */}
					</div>
				</div>

				<MobileScrollindicator />
			</Container>
		</section>
	);
};

export default NotableTransactions;
