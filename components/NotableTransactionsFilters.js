import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import styles from '../styles/NotableTransactions.module.scss';

const NotableTransactionsFilters = (props) => {
	// Filtering Transactions by Category

	const setCategory = (category) => {
		props.setTransactions(
			props.TransactionsList.filter(
				(transaction) => transaction.category === category
			)
		);

		props.resetTransactions();

		setOpenIcon(category);
	};

	// Changing the Filter Icon

	const [openIcon, setOpenIcon] = useState('Investment Sales');

	return (
		<div className={styles.description}>
			<div className={styles.filters}>
				<div
					className={styles.filter}
					onClick={() => setCategory('Investment Sales')}
				>
					{openIcon === 'Investment Sales' ? (
						<BiMinus color="#e63122" size="24px" />
					) : (
						<BiPlus color="#e63122" size="24px" />
					)}
					<h4>Investment Sales</h4>
				</div>
				<div
					className={styles.filter}
					onClick={() => setCategory('Capital Advisory')}
				>
					{openIcon === 'Capital Advisory' ? (
						<BiMinus color="#e63122" size="24px" />
					) : (
						<BiPlus color="#e63122" size="24px" />
					)}
					<h4>Capital Advisory</h4>
				</div>
			</div>

			<p className={styles.text}>
				HKS Real Estate Advisors was founded in 2011, and is an industry leader
				in Commercial Real Estate Advisory services. We provide financial
				services in the way of debt, equity, bridge and joint venture financing
				for commercial real estate transactions. Our investment sales division
				advises clients on single-asset, portfolios, development sites, air
				rights, ground leases, JV partnerships and partial equity sales across
				multifamily, industrial, office, retail and hospitality asset classes.
				We have been able to provide best in class sales and financing solutions
				with seamless execution regardless of complexity. Since established, we
				have closed north of $25 billion in transactions and are expanding
				aggressively.
			</p>
		</div>
	);
};

export default NotableTransactionsFilters;
