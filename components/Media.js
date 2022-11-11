import { useState } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import NewsCard from './NewsCard';
import NewsList from './NewsList';
import InstagramCard from './InstagramCard';
import InstagramList from './InstagramList';
import MobileScrollindicator from './MobileScrollindicator';
import styles from '../styles/Media.module.scss';

const News = () => {
	const news = NewsList;
	const instagram = InstagramList;

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
						{news.map((article, index) => (
							<NewsCard
								key={index}
								image={article.image}
								link={article.link}
								title={article.title}
								date={article.date}
								publisher={article.publisher}
								publisherLink={article.publisherLink}
								text={article.text}
							/>
						))}
					</div>
				)}

				{!showNews && (
					<div className={styles.newsSlider}>
						{instagram.map((article, index) => (
							<InstagramCard
								key={index}
								image={article.image}
								text={article.text}
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
