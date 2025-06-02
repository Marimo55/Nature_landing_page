type DividerProps = {
  variant?: 'vertical' | 'horizontal';
};

export default function VR({ variant = 'horizontal' }: DividerProps) {
  if (variant === 'vertical') {
    return <span aria-hidden='true' className='h-[18px] border-[0.5px]' />;
  }
  if (variant === 'horizontal') {
    return <span aria-hidden='true' className='w-[18px] border-[0.5px]' />;
  }
}
