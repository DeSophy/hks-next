// Components
import Container from './Container'
import { useInstagramFeed } from '../hooks/useInstagramFeed'

// Styles
import styles from '../styles/Hero.module.scss'

const Hero = ({ research }) => {
	// Fetching instagram posts
	const {
		data: instagram,
		isPending,
		error
	} = useInstagramFeed(process.env.instagramToken)

	// Getting the post where price is greater than $8,000,000

	let index = 0

	if (instagram) {
		for (let i = 0; i < instagram.length; i++) {
			let post = instagram[i].caption
				.split('\n')
				.slice(0, 1)
				.toString()
				.slice(10)
				.split(',')
				.join('')
			let postNum = parseInt(post)
			if (typeof postNum != 'number' && postNum < 8000000) {
				index++

				break
			}
		}
	}

	return (
		<section className={styles.hero} id='hero'>
			<video
				className={styles.heroVideo}
				loop
				poster='assets/hks-hero-poster.jpg'
				autoPlay
			>
				<source src='assets/hks-hero-video.webm' type='video/webm' />
			</video>

			<Container>
				<div className={styles.title}>
					<h1>HKS Real Estate Advisors</h1>
					<p>Committed to Delivering the Highest Level of Service</p>
					<ul className={styles.dynamicText}>
						<li>
							<span data-text='Investment Sales &amp; Advisory'>
								Investment Sales &amp; Advisory
							</span>
						</li>
						<li>
							<span data-text='Acquisition &amp; Bridge Financing'>
								Acquisition &amp; Bridge Financing
							</span>
						</li>
						<li>
							<span data-text='Long Term Fixed and Floating Rate Financing'>
								Long Term Fixed and Floating Rate Financing
							</span>
						</li>
						<li>
							<span data-text='Mezzanine and Private Equity'>
								Mezzanine and Private Equity
							</span>
						</li>
						<li>
							<span data-text='Construction Financing'>
								Construction Financing
							</span>
						</li>
					</ul>
				</div>
			</Container>

			<div className={styles.trackerContainer}>
				<div className={styles.tracker}>
					<div className={styles.trackerField}>
						{isPending && <p>Loading Last Closing..</p>}
						{error && <p>Could not load data..</p>}
						{instagram && (
							<>
								<p>
									<b>{instagram[index].caption.split('\n').slice(0, 1)}</b>
								</p>
								<p>
									{instagram[index].caption
										.split('\n')
										.slice(1)
										.toString()
										.split('.')
										.slice(0, 1)
										.toString()
										.slice(1, 140)}
									...
								</p>
								<a
									target='_blank'
									rel='noreferrer'
									href={instagram[index].permalink}
								>
									<p className='underlineButton'>MORE INFO</p>
								</a>
							</>
						)}
					</div>
					<div className={styles.trackerField}>
						<p>
							<b>{research[0].fields.title}</b>
						</p>
						<p>{research[0].fields.description.slice(0, 120) + '...'}</p>
						<a
							target='_blank'
							rel='noreferrer'
							href={'https:' + research[0].fields.link.fields.file.url}
						>
							<p className='underlineButton'>MORE INFO</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
