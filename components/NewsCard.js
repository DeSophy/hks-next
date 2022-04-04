import styleNews from '../styles/News.module.scss';

const NewsCard = (props) => {
	return (
		<div className={styleNews.cardContainer}>
			<div className={styleNews.card}>
				<a target="_blank" rel="noreferrer" href={props.link}>
					<img src={props.image} />
				</a>

				<div>
					<h3>{props.title}</h3>
					<p className={styleNews.date}>
						{props.date} | <a href={props.publisherLink}>{props.publisher}</a>
					</p>
					<br />

					<p className={styleNews.description}>
						{props.text.length > 200
							? props.text.slice(0, 200) + '...'
							: props.text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
