import { ArrowDownIcon, CloseIcon, Logo } from '@/assets/Icons';

import Link from './Link/Link';

type MenuProps = {
  isNavOpen?: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
};

export default function Menu({ isNavOpen = false, setIsNavOpen }: MenuProps) {
  const menuStyles = {
    mobileNav: 'lg:hidden flex w-full items-center justify-between',
    burgerMenu: 'space-y-2',
    burgerLine: 'block h-0.5 w-8 bg-[#3A6150]',
    mobileMenu: (isOpen: boolean) =>
      `${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-white z-50`,
    closeButton:
      'inline-block absolute top-6 right-16 cursor-pointer text-[#3A6150]',
    mobileLinks: 'flex flex-col items-center justify-center gap-8',
    desktopMenu: 'hidden lg:flex',
    desktopLinks: 'flex flex-row items-center justify-center flex-shrink-0',
    desktopLinkFirst: 'pr-4 border-r border-[#000000]',
    desktopLink: 'px-4 border-r border-[#000000]',
    desktopLinkLast: 'pl-4',
    languageLink: 'flex items-center gap-[4px]',
  };

  return (
    <div className='w-full'>
      <div className={menuStyles.mobileNav}>
        {!isNavOpen && (
          <>
            <Link href='#' ariaLabel='Home'>
              <Logo />
            </Link>

            <button
              className={menuStyles.burgerMenu}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <span className={menuStyles.burgerLine}></span>
              <span className={menuStyles.burgerLine}></span>
              <span className={menuStyles.burgerLine}></span>
            </button>
          </>
        )}
        {isNavOpen && (
          <div className={menuStyles.mobileMenu(isNavOpen)}>
            <button
              className={menuStyles.closeButton}
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label='Close menu'
            >
              <span>
                <CloseIcon />
              </span>
            </button>
            <ul className={menuStyles.mobileLinks}>
              <li>
                <Link href='#'>About us</Link>
              </li>
              <li>
                <Link href='#'>Contact us</Link>
              </li>
              <li>
                <Link href='#'>Blog</Link>
              </li>
              <li>
                <Link href='#'>Site Map</Link>
              </li>
              <li>
                <Link href='#' className={menuStyles.languageLink}>
                  Eng <ArrowDownIcon />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className={menuStyles.desktopMenu}>
        <ul className={menuStyles.desktopLinks}>
          <li className='pr-[77px]'>
            <Link href='#' ariaLabel='Home'>
              <Logo />
            </Link>
          </li>
          <li className={menuStyles.desktopLinkFirst}>
            <Link href='#'>About us</Link>
          </li>
          <li className={menuStyles.desktopLink}>
            <Link href='#'>Contact us</Link>
          </li>
          <li className={menuStyles.desktopLink}>
            <Link href='#'>Blog</Link>
          </li>
          <li className={menuStyles.desktopLink}>
            <Link href='#'>Site Map</Link>
          </li>
          <li className={menuStyles.desktopLinkLast}>
            <Link href='#' className={menuStyles.languageLink}>
              Eng <ArrowDownIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
