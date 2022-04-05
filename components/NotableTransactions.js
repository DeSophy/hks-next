import { useState, useEffect } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import TransactionCard from './TransactionCard';
import Bullet from './Bullet';
import TransactionsList from './TransactionsList';
import NotableTransactionsFilters from './NotableTransactionsFilters';
import styleNotableTransactions from '../styles/NotableTransactions.module.scss';

const NotableTransactions = () => {
	const [transactions, setTransactions] = useState(
		TransactionsList.filter(
			(transaction) => transaction.category === 'Investment Sales'
		)
	);

	const resetTransactions = () => {
		setFirstTransaction(0);
		setLastTransaction(6);
		// setSelectedBullet(0);
	};

	// const transactionsHandler = (index) => {
	// 	if (index === 0) {
	// 		resetTransactions();
	// 	} else {
	// 		setFirstTransaction(index * lastTransaction);
	// 		setLastTransaction(index * lastTransaction + lastTransaction);
	// 		setSelectedBullet(index);
	// 	}
	// };

	return (
		<section id="notable-transactions">
			<Container>
				<SectionTitle text="Notable Transactions" />
				<div className={styleNotableTransactions.container}>
					<NotableTransactionsFilters
						setTransactions={setTransactions}
						TransactionsList={TransactionsList}
						resetTransactions={resetTransactions}
					/>

					<div className={styleNotableTransactions.transactions}>
						<div className={styleNotableTransactions.transactionsContainer}>
							{transactions.map((transaction, index) => (
								<TransactionCard
									key={transaction.address + index}
									address={transaction.address}
									neighbourhood={transaction.neighbourhood}
									borough={transaction.borough}
									type={transaction.type}
									image={transaction.image}
									category={transaction.category}
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
			</Container>
		</section>
	);
};

export default NotableTransactions;
