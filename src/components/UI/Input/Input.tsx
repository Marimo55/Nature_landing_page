interface InputProps {
  variant: 'primary' | 'secondary' | 'formInput';
  placeholder?: string;
  className?: string;
  label?: string;
  id?: string;
  ariaLabel?: string;
}

export default function Input({
  variant,
  placeholder = '',
  className = '',
  label,
  id = 'lol',
  ariaLabel = '',
}: InputProps) {
  const inputStyles = {
    common:
      'w-full h-[48px] border-[2px] rounded-xs px-[15px] py-[11px] bg-white font-nomal text-lg',
    primary: `border-[#3A6150] placeholder:text-[#3A6150]/70 text-[#3A6150]/70`,
    secondary: `border-x-0 border-t-0 border-b-1`,
  };

  if (variant === 'primary') {
    return (
      <input
        type='text'
        placeholder={placeholder}
        className={`${inputStyles.common} ${inputStyles.primary} ${className}`}
        aria-label={ariaLabel}
        id={id}
      />
    );
  }
  if (variant === 'secondary') {
    return (
      <input
        className={`${inputStyles.common} ${inputStyles.secondary} ${className} `}
        type='text'
        id={id}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    );
  }

  if (variant === 'formInput') {
    return (
      <>
        {label && (
          <div className='flex gap-[2px] text-sm'>
            <span className='text-[#BA2B4B]'>*</span>
            <label htmlFor={id}>{label}</label>
          </div>
        )}
        <input
          className={`${inputStyles.common} ${inputStyles.primary} ${className} `}
          type='text'
          id={id}
          placeholder={placeholder}
          aria-label={ariaLabel}
        />
      </>
    );
  }

  return null;
}
