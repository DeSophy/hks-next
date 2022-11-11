import { useState } from 'react';

// Components
import Container from './Container';
import SectionTitle from './SectionTitle';
import NewsCard from './NewsCard';
import InstagramCard from './InstagramCard';
import InstagramList from './InstagramList';
import MobileScrollindicator from './MobileScrollindicator';

// Styles
import styles from '../styles/Media.module.scss';

const News = ({ news }) => {
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
