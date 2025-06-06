type DividerProps = {
  variant?: 'vertical' | 'horizontal';
  className?: string;
};

export default function Divider({
  variant = 'horizontal',
  className = '',
}: DividerProps) {
  if (variant === 'vertical') {
    return (
      <hr
        aria-hidden='true'
        className={`h-[18px] border-[0.5px] ${className}`}
      />
    );
  }
  if (variant === 'horizontal') {
    return (
      <hr
        aria-hidden='true'
        className={`border-t-1 border-[#E9E9E9] my-[24px] ${className}`}
      />
    );
  }
}
