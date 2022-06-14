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

							<li>126 5th Avenue, 15th Floor</li>

							<li>New York, NY, 10011</li>
						</ul>
					</div>
					<div className={styles.bottomColumn}>
						<p>Site Map</p>

						<div className={styles.siteMap}>
							<div>
								<ul>
									<Link href="/#about" scroll={false} passHref>
										<li>About</li>
									</Link>

									<Link
										href="/#investment-opportunities"
										scroll={false}
										passHref
									>
										<li>Investment Opportunities</li>
									</Link>

									<Link href="/#notable-transactions" scroll={false} passHref>
										<li>Notable Transactions</li>
									</Link>

									<Link href="/#team" scroll={false} passHref>
										<li>Team</li>
									</Link>
								</ul>
							</div>
							<div>
								<ul>
									<Link href="/#research" scroll={false} passHref>
										<li>Research</li>
									</Link>

									<Link href="/#media" scroll={false} passHref>
										<li>Media</li>
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
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.instagram.com/hksrealestateadvisors/"
							>
								<BsInstagram color="white" size="24px" />
							</a>

							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/company/hks-capital-partners-llc/about/"
							>
								<BsLinkedin color="white" size="24px" />
							</a>
						</div>

						<div>
							<ul>
								<Link href="/privacy/#privacy" scroll={false} passHref>
									<li>Privacy Policy</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Footer;
