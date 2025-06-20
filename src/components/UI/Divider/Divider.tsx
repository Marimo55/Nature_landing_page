type DividerProps = {
  variant?: 'horizontal';
  className?: string;
};

export default function Divider({
  variant = 'horizontal',
  className = '',
}: DividerProps) {
  if (variant === 'horizontal') {
    return (
      <hr
        aria-hidden='true'
        className={`border-t-1 border-[#E9E9E9] my-[24px] ${className}`}
      />
    );
  }
}
