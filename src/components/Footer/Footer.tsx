import { MasterCardIcon, VisaIcon } from '@/assets/Icons';

import Button from '../UI/Button/Button';
import Divider from '../UI/Divider/Divider';
import Input from '../UI/Input/Input';
import Link from '../UI/Link/Link';

export default function Foooter() {
  const footerStyles = {
    footerContainer: 'max-w-[1440px] px-5 sm:px-10 md:px-16 mx-auto py-[24px]',
    footerContent:
      'flex justify-center lg:justify-between flex-col lg:flex-row gap-[50px] lg:gap-[0px]',
    footerSubscribeContainer:
      'flex items-center justify-center lg:max-w-[533px] lg:min-w-[533px] w-full relative gap-[30px]',
    footerTitle: 'text-black font-bold text-5xl mb-[20px]',
    footerDescription: 'text-black mb-[31px]',
    footerInput:
      'rounded-e-none rounded-s-none  flex-shrink-1 h-[54px] outline-none ps-[0px] pe-[0px] sm:ps-[15px] sm:pe-[60px]',
    footerButton: 'rounded-s-none max-w-[195px] h-[54px]',
    footerNavigation: 'flex flex-col gap-[16px]',
    footerContacts: 'flex flex-col gap-[40px]',
    footerCopyRightContainer:
      'flex flex-col md:flex-row align-center justify-center gap-[20px] sm:justify-between ',
    footerCopyRightText:
      'justify-self-center lg:flex-[1_1_60%] text-center lg:text-right text-sm',
    footerCopyRightLinks:
      'flex flex-col sm:flex-row align-center gap-[15px] lg:flex-[1_1_45%] justify-center md:justify-end text-center sm:text-left',
  };

  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.footerContent}>
        <div>
          <h3 className={footerStyles.footerTitle}>PlantMe</h3>
          <p className={footerStyles.footerDescription}>
            Subscribe and be the first to know about our news and promotions.
          </p>

          <div className={footerStyles.footerSubscribeContainer}>
            <Input
              variant='secondary'
              className={footerStyles.footerInput}
              placeholder='example@gmail.com'
            />
            <Button
              variant='primary'
              ariaLabel='Subscirbe'
              className={footerStyles.footerButton}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <nav>
          <ul className={footerStyles.footerNavigation}>
            <li>
              <Link href='/about-us'>About Us</Link>
            </li>
            <li>
              <Link href='/contact-us'>Contact Us</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/site-map'>Site Map</Link>
            </li>
          </ul>
        </nav>
        <div className={footerStyles.footerContacts}>
          <div className='flex flex-col gap-[8px]'>
            <h4 className='text-lg'>Contacts</h4>
            <p>
              <Link className='text-black/60' href='tel:+380630720121'>
                +38 063 072 0121
              </Link>
            </p>
            <p>
              <Link
                className='text-black/60'
                href='mailto:plantme.store@gmail.com'
              >
                plantme.store@gmail.com
              </Link>
            </p>
          </div>
          <div className='flex gap-[36px]'>
            <VisaIcon />
            <MasterCardIcon />
          </div>
        </div>
      </div>

      <Divider />

      <div className={footerStyles.footerCopyRightContainer}>
        <p className={footerStyles.footerCopyRightText}>
          © 2022 PlantMe. All Rights Reserved
        </p>
        <ul className={footerStyles.footerCopyRightLinks}>
          <li>
            <Link className='text-sm text-black/50' href='/privacy-policy'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className='text-sm text-black/50' href='/terms-of-service'>
              Terms of service
            </Link>
          </li>
          <li>
            <Link className='text-sm text-black/50' href='language'>
              Language
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
