import Image from 'next/image'

// styles
import styles from '../styles/Media.module.scss'

const NewsCard = props => {
	const date = new Date(props.timestamp).toUTCString()

	return (
		<div className={styles.cardContainer}>
			<div className={styles.card}>
				<a target='_blank' rel='noreferrer' href={props.permalink}>
					<div className={styles.img}>
						{props.media_type == 'IMAGE' ? (
							<Image
								src={props.media}
								alt={props.title}
								layout='responsive'
								width={400}
								height={400}
							/>
						) : (
							<video
								src={props.media}
								// width={400}
								// height={400}
								autoPlay
								loop
								muted
							></video>
						)}
					</div>
				</a>

				<div>
					<p>{date.slice(0, -13)}</p>
					<br />
					<p className={styles.description}>
						{props.caption.length > 200
							? props.caption.slice(0, 200) + '...'
							: props.caption}
					</p>
				</div>
			</div>
		</div>
	)
}

export default NewsCard
