import { Link } from 'wouter'
import { NavItem } from './NavItem'

export function Navbar() {
  return (
    <nav className='grid grid-cols-1 md:grid-cols-2 place-items-center justify-between gap-4 bg-black text-white md:sticky md:top-0 py-2 z-10'>
      <h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-accent to-yellow-300'>
        <Link
          className='hover:bg-gray-500/40 rounded px-4 py-2 transition-colors focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent'
          href='/'
        >
          Rick and Morty
        </Link>
      </h1>
      <ul className='flex gap-4 justify-center'>
        <li>
          <NavItem to='/#character-list'>Character List</NavItem>
        </li>
        <li>
          <NavItem to='/about'>About</NavItem>
        </li>
      </ul>
    </nav>
  )
}
