import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Media from '../components/Media';
import NotableTransactions from '../components/NotableTransactions';
import InvestmentOpportunities from '../components/InvestmentOpportunities';
// import Careers from '../components/Careers';

export default function Home() {
	return (
		<>
			<Head>
				<title>HKS Real Estate Advisors</title>
				<meta
					name="description"
					content="HKS Real Estate Advisors is the nation's premier real estate advisory firm"
				/>
				<meta
					name="keywords"
					content="Real Estate, Capital Services, Investment Sales, New York City, Aquistion and Bridge, Permanent Finance, Mezanine and Private Equity"
				/>
				<link rel="icon" href="/favicon.jpg" />
			</Head>

			<Hero />
			<About />
			<Team />
			<InvestmentOpportunities />
			<NotableTransactions />
			<Media />
			{/* <Careers /> */}
		</>
	);
}
