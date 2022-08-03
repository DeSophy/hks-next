import { BiLeftArrowCircle } from 'react-icons/bi';
import { BiRightArrowCircle } from 'react-icons/bi';

const SliderContainer = (props) => {
	// Slider Controls

	const rightButtonHandler = () => {
		props.slider.current.scrollLeft += 276;
	};

	const leftButtonHandler = () => {
		props.slider.current.scrollLeft -= 276;
	};

	return (
		<div className={`sliderContainer ${props.hidden}`}>
			<div className="arrow">
				<BiLeftArrowCircle
					onClick={leftButtonHandler}
					color="white"
					size="24px"
				/>
			</div>

			<div className="slider">{props.children}</div>

			<div className="arrow">
				<BiRightArrowCircle
					onClick={rightButtonHandler}
					color="white"
					size="24px"
				/>
			</div>
		</div>
	);
};

export default SliderContainer;
