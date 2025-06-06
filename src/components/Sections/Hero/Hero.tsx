import Button from '@/components/UI/Button/Button';

export default function Hero() {
  const heroStyles = {
    heroSection: 'bg-[#F9F9F9] w-full pt-[25px] pb-[60px]',
    heroContent:
      'flex flex-col md:flex-row gap-[18px] justify-between mx-auto max-w-[1440px] px-5 sm:px-10 md:px-16',
    heroTextContainer:
      'max-w-[647px] flex flex-col align-center justify-center gap-[36px]',
    heroTitle: 'font-bold text-5xl text-[#3A6150]',
    heroSubTitle: 'text-2xl font-medium text-[#3A6150]',
    heroDescription: 'text-sm max-w-[540px] leading-[1.5] font-normal',
    heroDescContainer: 'flex flex-col gap-[16px]',
    heroButton: 'max-w-[196px]',
    heroImage: 'w-full h-full max-w-[648px]',
  };

  return (
    <section className={heroStyles.heroSection}>
      <div className={heroStyles.heroContent}>
        <div className={heroStyles.heroTextContainer}>
          <h1 className={heroStyles.heroTitle}>Lorem ipsum dolor sit amet</h1>

          <div className={heroStyles.heroDescContainer}>
            <h2 className={heroStyles.heroSubTitle}>
              Lorem ipsum dolor sit amet
            </h2>
            <p className={heroStyles.heroDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
              tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies.
              Urna hendrerit morbi sed gravida. Nulla aliquam ac diam amet,
              sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </p>
          </div>

          <div className={heroStyles.heroButton}>
            <Button variant='primary'>Buy Now</Button>
          </div>
        </div>

        <div>
          <img
            className={heroStyles.heroImage}
            src='src/assets/Images/Hero.png'
            alt='Hero image nature'
          />
        </div>
      </div>
    </section>
  );
}
