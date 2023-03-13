import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import News from '../components/News'
import NotableTransactions from '../components/NotableTransactions'
import InvestmentOpportunities from '../components/InvestmentOpportunities'
import Research from '../components/Research'
import Careers from '../components/Careers'
import { createClient } from 'contentful'

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const team = await client.getEntries({
		content_type: 'teamMember',
		order: 'fields.order'
	})

	const listing = await client.getEntries({
		content_type: 'listing',
		order: 'sys.createdAt'
	})

	const transaction = await client.getEntries({
		content_type: 'transaction',
		order: 'sys.createdAt'
	})

	const news = await client.getEntries({
		content_type: 'news'
		// order: 'sys.createdAt',
	})

	const research = await client.getEntries({
		content_type: 'research'
		// order: 'sys.createdAt',
	})

	const careers = await client.getEntries({
		content_type: 'careers'
		// order: 'sys.createdAt',
	})

	return {
		props: {
			teamMembers: team.items,
			listings: listing.items,
			notableTransactions: transaction.items,
			news: news.items,
			research: research.items,
			careers: careers.items
		}
	}
}

export default function Home({
	teamMembers,
	listings,
	notableTransactions,
	news,
	research,
	careers
}) {
	return (
		<>
			<Head>
				<title>HKS Real Estate Advisors</title>
				<meta
					name='description'
					content="HKS Real Estate Advisors is the nation's premier real estate advisory firm"
				/>
				<meta
					name='keywords'
					content='Real Estate, Capital Services, Investment Sales, New York City, Aquistion and Bridge, Permanent Finance, Mezanine and Private Equity'
				/>
				<link rel='icon' href='/favicon.jpg' />
			</Head>

			<Hero research={research} />
			<About />
			<Team teamMembers={teamMembers} />
			<InvestmentOpportunities listings={listings} />
			<NotableTransactions notableTransactions={notableTransactions} />
			<Research research={research} />
			<News news={news} />
			<Careers careers={careers} />
		</>
	)
}
