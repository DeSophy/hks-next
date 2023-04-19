import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// Components
import Hamburger from './Hamburger'

// Styles
import styleNav from '../styles/Nav.module.scss'

const Nav = () => {
	// Scrolling Header
	const [targetRef, isIntersecting] = useIntersectionObserver()

	// Mobile Menu

	const [menuOpen, setMenuOpen] = useState(false)
	const [menuClass, setMenuClass] = useState(styleNav.menuBtnClosed)
	const [hiddenMenuClass, setHiddenMenuClas] = useState(styleNav.hidden)

	const toggleMenu = () => {
		if (!menuOpen) {
			setMenuClass(styleNav.menuBtnOpen)
			setMenuOpen(true)
			setHiddenMenuClas('')
		} else {
			setMenuClass(styleNav.menuBtnClosed)
			setMenuOpen(false)
			setHiddenMenuClas(styleNav.hidden)
		}
	}

	const closeMenu = () => {
		setMenuClass(styleNav.menuBtnClosed)
		setMenuOpen(false)
		setHiddenMenuClas(styleNav.hidden)
	}

	return (
		<nav ref={targetRef}>
			<div
				className={isIntersecting ? styleNav.headerTop : styleNav.headerScroll}
			>
				<div className={styleNav.navContainer}>
					<div className={styleNav.nav}>
						<div className={styleNav.logo}>
							<Link href='/#hero' scroll={false} passHref>
								<Image
									layout='responsive'
									width={100}
									height={100}
									src={
										isIntersecting ? '/logo-secondary.svg' : '/logo-primary.svg'
									}
									alt='Logo'
								/>
							</Link>
						</div>

						<div className={styleNav.menu}>
							<Hamburger toggleMenu={toggleMenu} menuClass={menuClass} />

							<ul className={hiddenMenuClass}>
								<Link href='/#about' scroll={false} passHref>
									<li onClick={() => closeMenu()}>About</li>
								</Link>
								<Link href='/#team' scroll={false} passHref>
									<li onClick={() => closeMenu()}>Team</li>
								</Link>
								<Link href='/#investment-opportunities' scroll={false} passHref>
									<li onClick={() => closeMenu()}>Investment Opportunities</li>
								</Link>
								<Link href='/#notable-transactions' scroll={false} passHref>
									<li onClick={() => closeMenu()}>Notable Transactions</li>
								</Link>
								<Link href='/#research' scroll={false} passHref>
									<li onClick={() => closeMenu()}>Research</li>
								</Link>
								<Link href='/#media' scroll={false} passHref>
									<li onClick={() => closeMenu()}>Media</li>
								</Link>
								<Link href='/rates/#rates' scroll={false} passHref>
									<li onClick={() => closeMenu()}>Index Rates</li>
								</Link>
								<Link href='/#careers' scroll={false} passHref>
									<li onClick={() => closeMenu()}>Careers</li>
								</Link>
								<Link href='/#contact' scroll={false} passHref>
									<li onClick={() => closeMenu()}>Contact</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
