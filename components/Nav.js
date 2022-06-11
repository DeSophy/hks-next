import Container from './Container';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './Hamburger';
import styleNav from '../styles/Nav.module.scss';

const Nav = () => {
	// Scrolling Header

	const [headerVisibility, setHeaderVisibility] = useState(true);

	const headerRef = useRef();

	const headerStyle = headerVisibility
		? styleNav.headerTop
		: styleNav.headerScroll;

	const logo = headerVisibility ? '/logo-secondary.svg' : '/logo-primary.svg';

	useEffect(() => {
		let options = {
			root: null,
			rootMargin: '100px',
			threshold: 1.0,
		};

		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setHeaderVisibility(entry.isIntersecting);
		}, options);

		observer.observe(headerRef.current);
	}, []);

	// Mobile Menu

	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClass, setMenuClass] = useState(styleNav.menuBtnClosed);
	const [hiddenMenuClass, setHiddenMenuClas] = useState(styleNav.hidden);

	const toggleMenu = () => {
		if (!menuOpen) {
			setMenuClass(styleNav.menuBtnOpen);
			setMenuOpen(true);
			setHiddenMenuClas('');
		} else {
			setMenuClass(styleNav.menuBtnClosed);
			setMenuOpen(false);
			setHiddenMenuClas(styleNav.hidden);
		}
	};

	return (
		<>
			<div ref={headerRef}></div>

			<header className={headerStyle}>
				<div className={styleNav.navContainer}>
					<div className={styleNav.nav}>
						<div className={styleNav.logo}>
							<Link href="/#hero" scroll={false} passHref>
								<Image
									layout="responsive"
									width={100}
									height={100}
									src={logo}
									alt="Logo"
								/>
							</Link>
						</div>

						<div className={styleNav.menu}>
							<Hamburger toggleMenu={toggleMenu} menuClass={menuClass} />

							<ul className={hiddenMenuClass}>
								<Link href="/#about" scroll={false} passHref>
									<li>About</li>
								</Link>
								<Link href="/#team" scroll={false} passHref>
									<li>Team</li>
								</Link>
								<Link href="/#investment-opportunities" scroll={false} passHref>
									<li>Investment Opportunities</li>
								</Link>
								<Link href="/#notable-transactions" scroll={false} passHref>
									<li>Notable Transactions</li>
								</Link>
								<Link href="/#resarch" scroll={false} passHref>
									<li>Resarch</li>
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
			</header>
		</>
	);
};

export default Nav;
