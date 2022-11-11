import Image from 'next/image';
import styles from '../styles/Media.module.scss';

const NewsCard = (props) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.card}>
				<a target="_blank" rel="noreferrer" href={props.link}>
					<div className={styles.img}>
						<Image
							src={'https:' + props.image.fields.file.url}
							alt={props.title}
							layout="responsive"
							width={400}
							height={256}
						/>

						<div className="gradient"></div>
					</div>
				</a>

				<div>
					<h3>
						{props.title.length > 42
							? props.title.slice(0, 42) + '...'
							: props.title}
					</h3>
					<p className={styles.date}>
						{props.date} | <a href={props.publisherLink}>{props.publisher}</a>
					</p>
					<br />

					<p className={styles.description}>
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
