import { ArrowDownIcon, Logo } from '@/assets/Icons';

import VR from '../../../UI/VR/VR';
import Link from './Link/Link';

export default function Menu() {
  return (
    <div className='flex items-center gap-[77px]'>
      <div>
        <Link
          className='logo inline-block align-middle'
          href='/home'
          ariaLabel='Navigate to home page'
        >
          <Logo />
        </Link>
      </div>
      <ul className='flex items-center gap-[16px] w-full'>
        <li>
          <Link href='/about-us' ariaLabel='Navigate to about page'>
            About us
          </Link>
        </li>
        <VR />
        <li>
          <Link href='/contact-us' ariaLabel='Navigage to contact page'>
            Contact us
          </Link>
        </li>
        <VR />
        <li>
          <Link href='/blog' ariaLabel='Navigate to blog page'>
            Blog
          </Link>
        </li>
        <VR />
        <li>
          <Link href='/site-map' ariaLabel='Navigate to site map page'>
            Site Map
          </Link>
        </li>
        <VR />
        <li>
          <Link
            className='flex items-center gap-[4px]'
            href='/language'
            ariaLabel='Select language'
          >
            <span>Eng</span>
            <ArrowDownIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}
