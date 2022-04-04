import { useState, useEffect } from 'react';
import { BiLeftArrowCircle } from 'react-icons/bi';
import { BiRightArrowCircle } from 'react-icons/bi';

const SliderContainer = ({
	children,
	data,
	firstItem,
	setFirstItem,
	lastItem,
	setLastItem,
}) => {
	const items = data;

	// Slider Controls

	const rightButtonHandler = () => {
		if (lastItem < items.length) {
			setFirstItem(firstItem + 1);
			setLastItem(lastItem + 1);
		}
	};

	const leftButtonHandler = () => {
		if (firstItem != 0) {
			setFirstItem(firstItem - 1);
			setLastItem(lastItem - 1);
		}
	};

	return (
		<div className="sliderContainer">
			<div className="arrow">
				<BiLeftArrowCircle
					onClick={leftButtonHandler}
					color="white"
					size="24px"
				/>
			</div>

			<div className="slider">{children}</div>

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
