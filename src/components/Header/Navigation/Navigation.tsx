import Menu from './MenuItems/Menu';
import SearchBar from './Search/SearchBar';

export default function Navigation() {
  return (
    <nav className='flex items-center justify-between py-4'>
      <Menu />
      <SearchBar />
    </nav>
  );
}
