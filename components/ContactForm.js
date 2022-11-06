// Styles
import styleFooter from '../styles/Footer.module.scss';

const ContactForm = () => {
	return (
		<div className={styleFooter.formContainer}>
			<form
				name="contact"
				method="POST"
				netlify-honeypot="bot-field"
				data-netlify="true"
				action="/success"
			>
				<input type="hidden" name="form-name" value="contact" />
				<div className={styleFooter.field}>
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" name="firstName" />
				</div>
				<div className={styleFooter.field}>
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" name="lastName" />
				</div>
				<div className={styleFooter.field}>
					<label htmlFor="company">Company</label>
					<input type="text" id="company" name="company" />
				</div>
				<div className={styleFooter.field}>
					<label htmlFor="email">Email Address</label>
					<input type="email" id="email" name="email" />
				</div>
				<div className={styleFooter.area}>
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" />
				</div>

				<button className="buttonRed" type="submit">
					SEND
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
