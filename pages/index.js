import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Media from '../components/Media';
import NotableTransactions from '../components/NotableTransactions';
import InvestmentOpportunities from '../components/InvestmentOpportunities';
import Research from '../components/Research';
// import Careers from '../components/Careers';
import { createClient } from 'contentful';

export const getStaticProps = async () => {
	const client = createClient({
		space: 'kepefmor44ex',
		accessToken: 'DV4iPheBWoMWs1ajGtMZJv-6qIQkkeUJEqJ5XkAf-F0',
		// space: process.env.space,
		// accessToken: process.env.accessToken,
	});

	const team = await client.getEntries({
		content_type: 'teamMember',
		order: 'sys.createdAt',
	});

	const listing = await client.getEntries({
		content_type: 'listing',
		order: 'sys.createdAt',
	});

	const transaction = await client.getEntries({
		content_type: 'transaction',
		order: 'sys.createdAt',
	});

	return {
		props: {
			teamMembers: team.items,
			listings: listing.items,
			notableTransactions: transaction.items,
		},
	};
};

export default function Home({ teamMembers, listings, notableTransactions }) {
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
			<Team teamMembers={teamMembers} />
			<InvestmentOpportunities listings={listings} />
			<NotableTransactions notableTransactions={notableTransactions} />
			<Research />
			<Media />
			{/* <Careers /> */}
		</>
	);
}
