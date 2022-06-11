import styleFooter from '../styles/Footer.module.scss';

const ContactForm = () => {
	return (
		<div className={styleFooter.formContainer}>
			<form name="contact" method="POST" netlify>
				<div className={styleFooter.field}>
					<label>First Name</label>
					<input type="text" id="firstName" name="firstName" />
				</div>
				<div className={styleFooter.field}>
					<label>Last Name</label>
					<input type="text" id="lastName" name="lastName" />
				</div>
				<div className={styleFooter.field}>
					<label>Company</label>
					<input type="text" id="company" name="company" />
				</div>
				<div className={styleFooter.field}>
					<label>Email Address</label>
					<input type="email" id="email" name="email" />
				</div>
				<div className={styleFooter.area}>
					<label>Message</label>
					<textarea id="message" name="message" />
				</div>

				<input type="submit" value="SEND" />
			</form>
		</div>
	);
};

export default ContactForm;
