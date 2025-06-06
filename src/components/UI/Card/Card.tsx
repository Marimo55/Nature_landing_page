type CardProps = {
  cardImg: string;
  cardTitle: string;
  cardDescription: string;
  cardLink: string;
};

export default function Card({
  cardImg,
  cardTitle,
  cardDescription,
  cardLink,
}: CardProps) {
  const cardStyles = {
    cardCotainer:
      'bg-[#3A6150] max-w-[400px] md:max-w-[647px] w-full flex align-center justify-center p-[24px] pb-[35px] gap-[18px] rounded-[4px] flex-wrap',
    cardImage: 'max-w-[180px] max-h-[230px] ',
    cardTextContainer: 'flex flex-col max-w-[401px]',
    cardTitle: 'font-bold text-lg mb-[12px] text-white',
    cardDescription: 'text-sm text-white leading-[1.5]',
    cardLink: 'font-bold text-sm text-white mt-auto underline',
  };

  return (
    <div className={cardStyles.cardCotainer}>
      <div className={cardStyles.cardImage}>
        <img
          className='w-full h-full'
          src={cardImg}
          alt='About us placeholder image'
        />
      </div>

      <div className={cardStyles.cardTextContainer}>
        <h3 className={cardStyles.cardTitle}>{cardTitle}</h3>
        <p className={cardStyles.cardDescription}>{cardDescription}</p>
        <a className={cardStyles.cardLink} href={cardLink}>
          Learn more about &rarr;
        </a>
      </div>
    </div>
  );
}
