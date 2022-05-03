import React , { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence  } from 'framer-motion'
import Image from 'next/image';

function Header() {
  
  const [ active, setActive ] = useState(false);

  const navbarActive = () => {
    if (window.scrollY >= 100) {
      setActive(true);
    }
    else {
      setActive(false);
    }
  }

  useEffect(() => {
  window.addEventListener('scroll', navbarActive);
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      delay: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  }  

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const [ showMenu, setShowMenu ] = useState(false);

  let menu;

  if (showMenu) {
    
    menu = (
      <motion.div 
      key="menu"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{ 
        opacity: 0,
        transition: {
          duration: 2,
          ease: 'easeOut'
        }
      }}
      transition={{
        duration: 1,
        ease: 'easeIn'
      }}
      className="mega-menu-outer">
            <div className="mega-menu">
                <div className="mega-menu-bg-image mega-menu-scaled-up">
                    <div className="mega-menu-bg-image-inner inner-scaled-up"></div>
                    <div className="mega-menu-overlay"></div>
                </div>
                <motion.nav 
                variants={container}
                initial="hidden"
                animate="show"
                className="mega-menu-inner">
                    <motion.div 
                    variants={item}
                    className="nav-menu-row">
                      <Link href="/">
                        <a href="" className="mega-menu-link mega-menu-link-down">Home</a>
                      </Link>
                        <div className="mega-menu-link hide-on-mob mega-menu-link-down">/</div>
                      <Link href="/about-blythedale">
                        <a className="mega-menu-link mega-menu-link-down">About Blythedale</a>
                      </Link>
                        <div className="mega-menu-link hide-on-mob mega-menu-link-down">/</div>
                        <Link href="/blythedale-estate">
                        <a className="mega-menu-link mega-menu-link-down">The Estates</a>
                        </Link>
                    </motion.div>
                    <motion.div 
                    variants={item}
                    className="nav-menu-row">
                      <Link href="/lifestyle">
                        <a className="mega-menu-link mega-menu-link-down">Lifestyle</a>
                      </Link>
                        <div className="mega-menu-link hide-on-mob mega-menu-link-down">/</div>
                        <Link href="/eco-smart-estate">
                        <a className="mega-menu-link mega-menu-link-down">Eco-Smart Estate</a>
                        </Link>
                        <div className="mega-menu-link hide-on-mob mega-menu-link-down">/</div>
                        <a href="/the-fontus-spa" className="mega-menu-link mega-menu-link-down">Book a site visit</a>
                    </motion.div>
                    <motion.div 
                    variants={item}
                    className="nav-menu-row">
                      <Link href="/investor-club">
                        <a className="mega-menu-link mega-menu-link-down">Investor Club</a>
                      </Link>
                        <div className="mega-menu-link hide-on-mob mega-menu-link-down">/</div>
                        <Link href="/plot-and-plan">
                        <a className="mega-menu-link mega-menu-link-down">Plot and Plan</a>
                        </Link>
                        <div className="mega-menu-link hide-on-mob mega-menu-link-down">/</div>
                        <a href="/facilities" aria-current="page" className="mega-menu-link mega-menu-link-down">Facilities</a>
                    </motion.div>
                    <motion.div 
                    variants={item}
                    className="nav-menu-row">
                        <a href="/faqs" className="mega-menu-link mega-menu-link-down">FAQs</a>
                        <div className="mega-menu-link hide-on-mob mega-menu-link-down">/</div>
                        <a href="/getting-here" className="mega-menu-link mega-menu-link-down">Getting here</a>
                        <div className="mega-menu-link hide-on-mob mega-menu-link-down">/</div>
                        <Link href="/contact">
                        <a className="mega-menu-link mega-menu-link-down">Contact</a>
                        </Link>
                        <a href="#" target="_blank" className="mega-menu-link show-on-on-mob mega-menu-link-down">Register now</a>
                    </motion.div>
                </motion.nav>
                <div className="menu-social-links fade">
                    <a href="https://www.instagram.com/pinnaclepointestate/" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
                        <div className="social-embed w-embed">
                            
                        </div>
                    </a>
                    <a href="https://www.facebook.com/PinnaclePointEstate/" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
                        <div className="social-embed w-embed">
                            
                        </div>
                    </a>
                    <a href="https://twitter.com/PinnaclePEstate" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
                        <div className="social-embed w-embed">
                            
                        </div>
                    </a>
                </div>
            </div>
      </motion.div>
    );
  }

  // const [ DropDown, setDropDown ] = useState(false);

  // let dropdown;

  // if (DropDown) {
  //     dropdown = (
  //           <motion.nav 
  //           className="dropdown-list wider w-dropdown-list"
  //           >
  //           <Link href="tel:+27446065300">
  //           <a className="nav-text-drop-down w-dropdown-link">
  //             +27(0) 44 606 5300
  //           </a>
  //           </Link>
  //           <Link href="mailto:golfbookings@pinnaclepointestate.co.za">
  //           <a className="nav-text-drop-down w-dropdown-link">
  //             golfbookings@pinnaclepointestate.co.za
  //           </a>
  //           </Link>
  //         </motion.nav>
  //     )
  // }

  const [ showEstates, setShowEstates ] = useState(false);

  let estatesDropdown;

  if (showEstates) {
    estatesDropdown = (
            <motion.nav 
            className="dropdown-list wider w-dropdown-list"
            >
            <Link href="/estates/blythedale-beach">
            <div className="nav-text-drop-down w-dropdown-link">
            Blythedale Beach
            </div>
            </Link>
            <Link href="/estates/blythedale-equestrian">
            <div className="nav-text-drop-down w-dropdown-link">
            Blythedale Equestrian
            </div>
            </Link>
            <Link href="/estates/blythedale-forest">
            <div className="nav-text-drop-down w-dropdown-link">
            Blythedale Forest
            </div>
            </Link>
            <Link href="/estates/blythedale-golf">
            <div className="nav-text-drop-down w-dropdown-link">
            Blythedale Golf
            </div>
            </Link>
            <Link href="/estates/blythedale-hills">
            <div className="nav-text-drop-down w-dropdown-link">
            Blythedale Hills
            </div>
            </Link>
            <Link href="/estates/blythedale-ocean">
            <div className="nav-text-drop-down w-dropdown-link">
            Blythedale Ocean
            </div>
            </Link>
          </motion.nav>
      )
  }

  return (
    <header className={ active ? 'active-header':''}>
    <div className={ active ? 'main-nav-bar active':'main-nav-bar'}>
      <div className="nav-divider">
        <div className="hamburger-outer">
          <div className="hamburger">
            <div className="nav-item-hover-bg"></div>
            <div className="hamburger-container" onClick={() => setShowMenu(!showMenu)}>
              <div className="ham-line-cross-2">
                <div className="ham-line cross2"></div>
              </div>
              <div className="ham-line-cross-1">
                <div className="ham-line cross1"></div>
              </div>
              <div className={ active ? 'ham-line top active-hamburger':'ham-line top'}></div>
              <div className={ active ? 'ham-line middle active-hamburger':'ham-line middle'}></div>
              <div className={ active ? 'ham-line bottom active-hamburger':'ham-line bottom'}></div>
            </div>
          </div>
          <div className="hamburger-no-click-null no-click-hidden"></div>
        </div>
        <div className={ active ? 'divider-line active-divider-line' : 'divider-line'}></div>
        <div className="nav-item dropdown hide-on-tab w-dropdown" onClick={() => setShowEstates(!showEstates)}>
          <div className="dropdown-toggle w-dropdown-toggle">
            <div className="nav-item-hover-container">
              <div className="nav-item-hover-bg"></div>
            </div>
            <div className={ active ? 'drop-down-icon w-icon-dropdown-toggle active-dropdown':'drop-down-icon w-icon-dropdown-toggle'}></div>
            <div className={ active ? 'nav-text active-text':'nav-text'}>ESTATES</div>
          </div>
          {estatesDropdown}
        </div>
        <div className={ active ? 'divider-line active-divider-line' : 'divider-line hide-on-tab'}></div>
      </div>
      <div className="nav-divider on-the-right">
        <div className={ active ? 'divider-line active-divider-line' : 'divider-line'}></div>
        <a
          href="https://www.elan.co.za/investor-club/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item hide-on-mob w-inline-block">
          <div className="nav-item-hover-bg"></div>
          <div className={ active ? 'nav-text active-text':'nav-text'}>INVESTOR CLUB</div>
        </a>
        <div className={ active ? 'divider-line active-divider-line' : 'divider-line absolute-on-tab'}></div>
        
        <a
          href="#"
          target="_blank"
          className="nav-item hide-on-mob w-inline-block">
          <div className="nav-item-hover-bg"></div>
          <div className={ active ? 'nav-text active-text':'nav-text'}>CONTACT</div>
        </a>
      </div>
      <div className="bottom-key-line"></div>
      <Link href="/">
      <a className="main-logo w-inline-block">
        <Image
          src="/images/logo/blythedale-coastal-estate-logo-dark.webp"
          alt="logo"
          className="main-logo-image-white"
          width="102.5"
          height="50"
        />
        
      </a>
      </Link>
    </div>
    <AnimatePresence>
      {menu}
    </AnimatePresence>
    </header>
  )
}

export default Header