import { Link } from 'wouter'
import { NavItem } from './NavItem'

export function Navbar() {
  return (
    <nav className='grid grid-cols-1 md:grid-cols-2 place-items-center justify-between gap-4 bg-black text-white md:sticky md:top-0 py-2'>
      <h1>
        <Link
          className='hover:bg-gray-500/40 rounded px-4 py-2 transition-colors focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent font-bold text-4xl text-accent'
          href='/'
        >
          Rick and Morty
        </Link>
      </h1>
      <ul className='flex gap-4 justify-center'>
        <li>
          <NavItem>Home</NavItem>
        </li>
        <li>
          <NavItem>About</NavItem>
        </li>
      </ul>
    </nav>
  )
}
