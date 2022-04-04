import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import styleAbout from '../styles/About.module.scss';

const Service = (props) => {
	return (
		<div className={styleAbout.service} onClick={props.onClick}>
			<div className={styleAbout.serviceTitleContainer}>
				{props.selectedService === props.index ? (
					<BiMinus color="#e63122" size="24px" />
				) : (
					<BiPlus color="#e63122" size="24px" />
				)}
				<h4 className={styleAbout.serviceTitle}>{props.title}</h4>
			</div>

			{props.selectedService === props.index ? (
				<p className={styleAbout.serviceText}>{props.description}</p>
			) : (
				''
			)}
		</div>
	);
};

export default Service;
