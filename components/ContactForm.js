import styleFooter from '../styles/Footer.module.scss';

const ContactForm = () => {
	return (
		<div className={styleFooter.formContainer}>
			<form>
				<div className={styleFooter.field}>
					<label>First Name</label>
					<input type="text" />
				</div>
				<div className={styleFooter.field}>
					<label>Last Name</label>
					<input type="text" />
				</div>
				<div className={styleFooter.field}>
					<label>Company</label>
					<input type="text" />
				</div>
				<div className={styleFooter.field}>
					<label>Email Address</label>
					<input type="email" />
				</div>
				<div className={styleFooter.area}>
					<label>Message</label>
					<textarea />
				</div>

				<input type="submit" value="SEND" />
			</form>
		</div>
	);
};

export default ContactForm;
