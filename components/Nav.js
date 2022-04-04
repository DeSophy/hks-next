import Container from './Container';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';
import styleNav from '../styles/Nav.module.scss';

const Nav = () => {
	// Scrolling Header

	const [headerVisibility, setHeaderVisibility] = useState(true);

	const headerRef = useRef();

	const headerStyle = headerVisibility
		? styleNav.headerTop
		: styleNav.headerScroll;

	const logo = headerVisibility ? 'logo-secondary.svg' : 'logo-primary.svg';

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
						<img className={styleNav.logo} src={logo} />

						<div className={styleNav.menu}>
							<Hamburger toggleMenu={toggleMenu} menuClass={menuClass} />

							<ul className={hiddenMenuClass}>
								<li>About</li>
								<li>Divisions</li>
								<Link href="/#notable-transactions" scroll={false}>
									<li>Notable Transactions</li>
								</Link>
								<Link href="/#news" scroll={false}>
									<li>News</li>
								</Link>
								<Link href="/#careers" scroll={false}>
									<li>Careers</li>
								</Link>
								<Link href="/#contact" scroll={false}>
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
