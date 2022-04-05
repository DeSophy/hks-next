import { useState, useEffect } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import SliderContainer from './SliderContainer';
import NewsCard from './NewsCard';
import NewsList from './NewsList';
import styles from '../styles/News.module.scss';

const News = () => {
	const news = NewsList;

	return (
		<section className="section-dark" id="news">
			<Container>
				<SectionTitle style={styles.title} text="In The News" />

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
			</Container>
		</section>
	);
};

export default News;
