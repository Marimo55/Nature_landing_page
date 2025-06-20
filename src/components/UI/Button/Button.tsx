type ButtonProps = {
  variant: 'primary' | 'primary-icon';
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

export default function Button({
  children,
  variant = 'primary',
  ariaLabel = '',
  className = '',
  icon = null,
}: ButtonProps) {
  const buttonStyles = {
    primary: `w-full bg-[#3A6150] h-[48px] flex items-center justify-center rounded-[4px] text-white font-nomal text-lg p-2`,
  };

  if (variant === 'primary') {
    return (
      <button
        type='button'
        aria-label={ariaLabel}
        className={`${buttonStyles.primary} ${className}`}
      >
        {children}
      </button>
    );
  }

  if (variant === 'primary-icon') {
    return (
      <button
        type='button'
        aria-label={ariaLabel}
        className={`${buttonStyles.primary} ${className}`}
      >
        {icon}
      </button>
    );
  }

  return null;
}
