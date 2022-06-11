import Container from './Container';
import Map from './Map';
import ContactForm from './ContactForm';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
	return (
		<section className={'section-dark ' + styles.section} id="contact">
			<Container>
				<div className={styles.footerTop}>
					<div className={styles.map}>
						<Map />
					</div>

					<ContactForm />
				</div>

				<div className={styles.footerBottom}>
					<div className={styles.bottomColumn}>
						<p>Contact Us</p>
						<ul>
							<li>(212) 254-1600</li>

							<li>info@hks.com</li>

							<li>38 West 21st Street, 8th Floor</li>

							<li>New York, NY, 10010</li>
						</ul>
					</div>
					<div className={styles.bottomColumn}>
						<p>Site Map</p>

						<div className={styles.siteMap}>
							<div>
								<ul>
									<Link href="/#company" scroll={false} passHref>
										<li>Company</li>
									</Link>

									<li>Investment Opportunities</li>

									<Link href="/#notable-transactions" scroll={false} passHref>
										<li>Notable Transactions</li>
									</Link>

									<Link href="/#careers" scroll={false} passHref>
										<li>Careers</li>
									</Link>
								</ul>
							</div>
							<div>
								<ul>
									<Link href="/#team" scroll={false} passHref>
										<li>Team</li>
									</Link>

									<li>Capital Advisory</li>

									<Link href="/#news" scroll={false} passHref>
										<li>News</li>
									</Link>

									<Link href="/#contact" scroll={false} passHref>
										<li>Contact</li>
									</Link>
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.bottomColumn}>
						<div className={styles.socialMedia}>
							<BsInstagram color="white" size="24px" />
							<BsLinkedin color="white" size="24px" />
						</div>

						<div>
							<ul>
								<li>Privacy Policy</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Footer;
