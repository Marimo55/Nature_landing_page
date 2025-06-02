import { useState } from 'react';

import Menu from './MenuItems/Menu';
import SearchBar from './Search/SearchBar';

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className='flex flex-col items-center justify-between py-4 gap-6 lg:gap-50 lg:flex-row'>
      <Menu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {!isNavOpen && <SearchBar />}
    </nav>
  );
}
