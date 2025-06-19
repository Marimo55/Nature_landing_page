import { FacebookIcon } from '@/assets/Icons';
import Button from '@/components/UI/Button/Button';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import Input from '@/components/UI/Input/Input';
import Link from '@/components/UI/Link/Link';
import RadioBtn from '@/components/UI/RadioBtn/RadioBtn';

export default function ContactUs() {
  const contactStyles = {
    contactContainer: 'bg-[#71837B] w-full pt-[80px] pb-[120px]',
    contactContent:
      'contactContent flex flex-col lg:flex-row mx-auto max-w-[1440px] px-5 sm:px-10 md:px-16',
    contactLeft:
      'leftContainer bg-[url(/src/assets/Images/Contact_us.png)] bg-cover lg:max-w-[425px] p-[42px] pr-[48px] flex flex-col gap-[56px] rounded-b-none lg:rounded relative z-10',
    contactLinkContainer: 'flex flex-col gap-[19px]',
    contactLink: 'flex gap-[24px] text-sm align-center items-center',
    contactSocialIcons: 'flex gap-[36px] mt-auto',
    contactRight:
      'bg-white flex flex-col mt-[-10px] lg:mt-[0px] lg:ml-[-11px] px-[20px] pl-[28px] py-[48px] w-full gap-y-[26px] min-h-[637px] rounded-b lg:rounded-b-none',
    inputContainers: 'flex w-full flex-wrap gap-[18px] gap-y-[26px]',
  };

  return (
    <section className={contactStyles.contactContainer}>
      <div className={contactStyles.contactContent}>
        <div className={contactStyles.contactLeft}>
          <div>
            <h3 className='text-5xl font-bold mb-4'>Contact Us</h3>
            <p className='text-sm'>
              Fill up the form and ur Team will get back to you within 24 hours.
              Happy to see your message!
            </p>
          </div>

          <div>
            <ul className={contactStyles.contactLinkContainer}>
              <li className={contactStyles.contactLink}>
                <FacebookIcon />
                <Link href='tel:+380931532456' className='text-sm'>
                  +380 93 15 32 456
                </Link>
              </li>
              <li className={contactStyles.contactLink}>
                <FacebookIcon />
                <Link href='mailto:example@gmail.com' className='text-sm'>
                  example@gmail.com
                </Link>
              </li>
              <li className={contactStyles.contactLink}>
                <FacebookIcon />
                <p>Pidmurma 5a, Lviv</p>
              </li>
            </ul>
          </div>

          <div className={contactStyles.contactSocialIcons}>
            <Link href='/link1'>
              <FacebookIcon />
            </Link>
            <Link href='/link2'>
              <FacebookIcon />
            </Link>
            <Link href='/link3'>
              <FacebookIcon />
            </Link>
          </div>
        </div>

        <div className={contactStyles.contactRight}>
          <div className={contactStyles.inputContainers}>
            <div className='max-w-[416px] 2xl:w-full grow'>
              <Input variant='formInput' label='First name' id='firstName' />
            </div>
            <div className='max-w-[416px] 2xl:w-full grow shrink'>
              <Input variant='formInput' label='Last name' id='lastName' />
            </div>
            <div className='max-w-[416px] 2xl:w-full grow shrink'>
              <Input variant='formInput' label='Email' id='email' />
            </div>
            <div className='max-w-[416px] 2xl:w-full grow shrink'>
              <Input
                variant='formInput'
                label='Phone number'
                id='phoneNumber'
              />
            </div>
          </div>

          <div className='flex gap-[36px] gap-y-[15px] flex-wrap'>
            <RadioBtn id='radio1' label='UI Developer' name='specialisation' />
            <RadioBtn
              id='radio2'
              label='UI/UX Designer'
              name='specialisation'
            />
            <RadioBtn
              id='radio3'
              label='Accessibility  Expert'
              name='specialisation'
            />
            <RadioBtn id='radio4' label='QA Engineer' name='specialisation' />
            <RadioBtn id='radio4' label='Other' name='specialisation' />
            {/* <Checkbox id='check1' label='option1' name='checkboxlol' /> */}
          </div>
          <div className='flex flex-col gap-[8px] w-full'>
            <label className='text-sm' htmlFor='textAreaMsg'>
              Message
            </label>
            <textarea
              className='h-[104px] border rounded py-[12px] px-[8px]'
              name='textAreaMsg'
              id='textAreaMsg'
              placeholder='Text here...'
            ></textarea>
          </div>

          <div className='flex gap-[48px] gap-y-[15px] flex-wrap'>
            <Checkbox id='terms1' name='terms1' label='Accept the Terms' />
            <Checkbox id='terms2' name='terms2' label='Accept the Terms 2' />
          </div>

          <div className='flex w-full justify-center sm:justify-end mt-auto'>
            <Button className='max-w-[196px]' variant='primary'>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
