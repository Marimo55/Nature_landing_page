interface InputProps {
  variant: 'primary' | 'secondary';
  placeholder?: string;
  className?: string;
}

export default function Input({
  variant,
  placeholder = 'Search this site',
  className = '',
}: InputProps) {
  const inputStyles = {
    common:
      'w-full h-[48px] border-[2px] rounded-xs px-[15px] py-[11px] bg-white font-nomal text-lg',
    primary: `border-[#3A6150] placeholder:text-[#3A6150]/70 text-[#3A6150]/70`,
    secondary: `border-[#000000]`,
  };

  if (variant === 'primary') {
    return (
      <input
        type='text'
        placeholder={placeholder}
        className={`${inputStyles.common} ${inputStyles.primary} ${className}`}
      />
    );
  }
  if (variant === 'secondary') {
    return <input type='text' placeholder={placeholder} />;
  }
}
