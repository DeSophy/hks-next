import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const Container = ({ children }) => {
	// Scroll Animation

	const options = {
		root: null,
		rootMargin: '10%',
		threshold: 0
	}

	const [targetRef, isIntersecting] = useIntersectionObserver(options)

	return (
		<div
			ref={targetRef}
			className={`container ${
				isIntersecting ? 'animatedContainer' : 'hiddenContainer'
			}`}
		>
			{children}
		</div>
	)
}

export default Container
