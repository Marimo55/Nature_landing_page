import Card from '../../UI/Card/Card';

export default function AboutUs() {
  return (
    <section className='flex algin-center justify-center gap-[18px] max-w-[1440px] mx-auto py-[80px] flex-wrap px-16'>
      <Card
        cardTitle='About us'
        cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus. Senectus sed maecenas viverra tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus.'
        cardLink='/about-us-page'
        cardImg='/src/assets/Images/About_us.png'
      />
      <Card
        cardTitle='About us'
        cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus. Senectus sed maecenas viverra tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus.'
        cardLink='/about-us-page'
        cardImg='/src/assets/Images/About_us.png'
      />
    </section>
  );
}
