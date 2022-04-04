import { useState, useEffect, useRef } from 'react';

const SectionTitle = (props) => {
	const [animated, setAnimated] = useState(false);
	const titleStyle = animated ? 'animatedTitle' : 'placeholder';

	const title = useRef();

	useEffect(() => {
		let options = {
			root: null,
			rootMargin: '100px',
			threshold: 1.0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setAnimated(entry.isIntersecting));
		}, options);

		observer.observe(title.current);
	}, []);

	return (
		<div ref={title} className="title-container">
			<h2 data-text={props.text} className={`${props.style} ${titleStyle}`}>
				{props.text}
			</h2>
		</div>
	);
};

export default SectionTitle;
