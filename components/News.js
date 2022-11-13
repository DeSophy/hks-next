import { useState } from 'react';
import { useInstagramFeed } from '../hooks/useInstagramFeed';

// Components
import Container from './Container';
import SectionTitle from './SectionTitle';
import NewsCard from './NewsCard';
import InstagramCard from './InstagramCard';
import MobileScrollindicator from './MobileScrollindicator';

// Styles
import styles from '../styles/Media.module.scss';

const News = ({ news }) => {
	const {
		data: instagram,
		isPending,
		error,
	} = useInstagramFeed(process.env.instagramToken);

	// console.log(data);

	const [showNews, setShowNews] = useState(true);

	return (
		<section id="media">
			<Container>
				<SectionTitle style={styles.title} text="Media" />
				<div className={styles.mediaNav}>
					<h4 className={styles.tabButton} onClick={() => setShowNews(true)}>
						In The News
					</h4>{' '}
					<h4>|</h4>{' '}
					<h4 className={styles.tabButton} onClick={() => setShowNews(false)}>
						Social Media
					</h4>
				</div>

				{showNews && (
					<div className={styles.newsSlider}>
						{news.map((article) => (
							<NewsCard
								key={article.sys.id}
								image={article.fields.image}
								link={article.fields.link}
								title={article.fields.title}
								date={article.fields.date}
								publisher={article.fields.publisher}
								publisherLink={article.fields.publisherLink}
								text={article.fields.text}
							/>
						))}
					</div>
				)}

				{!showNews && (
					<div className={styles.newsSlider}>
						{isPending && <p>Loading Instagram</p>}
						{error && <p>Could not load instagram</p>}
						{instagram &&
							instagram
								.slice(0, 4)
								.map((post) => (
									<InstagramCard
										key={post.id}
										media={post.media_url}
										media_type={post.media_type}
										caption={post.caption}
										permalink={post.permalink}
										timestamp={post.timestamp}
									/>
								))}
					</div>
				)}

				<MobileScrollindicator />
			</Container>
		</section>
	);
};

export default News;
