import Head from 'next/head'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const Rates = () => {
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
			<div className='top-background'></div>
			<section>
				<Container>
					<div className='rates'>
						<SectionTitle text='Index Rates' />
						<iframe
							id='rates'
							src='https://www.thefinancials.com/Widget.aspx?pid=HKS&wid=0344406736&style=table_tall_graph'
							frameborder='0'
						></iframe>
					</div>
				</Container>
			</section>
		</>
	)
}

export default Rates
