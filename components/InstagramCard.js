import Image from 'next/image';
import styles from '../styles/Media.module.scss';

const NewsCard = (props) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.card}>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.instagram.com/hksrealestateadvisors/"
				>
					<div className={styles.img}>
						<Image
							src={props.image}
							alt={props.title}
							layout="responsive"
							width={400}
							height={400}
						/>
					</div>
				</a>

				<div>
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
