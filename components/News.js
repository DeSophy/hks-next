import { useState, useEffect } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import SliderContainer from './SliderContainer';
import NewsCard from './NewsCard';
import NewsList from './NewsList';
import styleNews from '../styles/News.module.scss';

const News = () => {
	const news = NewsList;

	const [firstArticle, setFirstArticle] = useState(0);
	const [lastArticle, setLastArticle] = useState(3);

	// Responsive

	const resize = () => {
		setFirstArticle(0);

		if (window.innerWidth < 769) {
			setLastArticle(firstArticle + 1);
		} else if (window.innerWidth >= 769 && window.innerWidth < 1025) {
			setLastArticle(firstArticle + 2);
		} else {
			setLastArticle(firstArticle + 3);
		}
	};

	useEffect(() => {
		// Resizing the screen

		window.addEventListener('resize', () => {
			resize();
		});

		// Onload
		resize();
	}, [resize]);

	return (
		<section className="section-dark" id="news">
			<Container>
				<SectionTitle style={styleNews.title} text="In The News" />
				<SliderContainer
					data={news}
					firstItem={firstArticle}
					setFirstItem={setFirstArticle}
					lastItem={lastArticle}
					setLastItem={setLastArticle}
				>
					{news.slice(firstArticle, lastArticle).map((article, index) => (
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
				</SliderContainer>
			</Container>
		</section>
	);
};

export default News;
