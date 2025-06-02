import { SearchIcon } from '@/assets/Icons';
import Button from '@/components/UI/Button/Button';
import Input from '@/components/UI/Input/Input';

export default function SearchBar() {
  return (
    <div className='flex items-center justify-center lg:max-w-[424px] w-full relative flex-shrink-1'>
      <Input
        variant='primary'
        className='rounded-e-none pe-[60px] flex-shrink-1'
      />
      <Button
        variant='primary-icon'
        icon={<SearchIcon />}
        ariaLabel='Search'
        className='rounded-s-none absolute max-w-[48px] top-0 right-0'
      />
    </div>
  );
}
