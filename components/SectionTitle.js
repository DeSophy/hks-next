import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const SectionTitle = props => {
	// Scroll Animation

	const [targetRef, isIntersecting] = useIntersectionObserver()

	return (
		<div ref={targetRef} className='title-container'>
			<h2
				data-text={props.text}
				className={`${props.style} ${
					isIntersecting ? 'animatedTitle' : 'placeholder'
				}`}
			>
				{props.text}
			</h2>
		</div>
	)
}

export default SectionTitle
