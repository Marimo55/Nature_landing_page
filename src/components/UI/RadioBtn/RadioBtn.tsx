type RadioBtnProps = {
  id: string;
  label: string;
  name: string;
  value?: string;
};

export default function RadioBtn({ id, label, name }: RadioBtnProps) {
  const radioStyles = {
    customRadio:
      'custom-radio appearance-none m-0 w-5 h-5 border-2 border-black checked:border-[#3a6150] rounded-full transition-all ease-in-out duration-100 relative after:block after:rounded-full after:w-3 after:h-3 after:m-[2px] after:transition-colors after:duration-100 m-2',
  };

  return (
    <div className='flex items-center gap-2'>
      <input
        type='radio'
        name={name}
        id={id}
        className={radioStyles.customRadio}
      />
      <label className='text-sm' htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
