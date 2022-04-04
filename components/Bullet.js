import React from 'react';

const Bullet = (props) => {
	return (
		<div
			className={
				props.selectedBullet === props.index ? 'selectedBullet' : 'bullet'
			}
			onClick={props.onClick}
		></div>
	);
};

export default Bullet;
