import { Link } from 'wouter'

export function NavItem({ children, to }) {
  return (
    <Link
      className='focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent px-4 py-2 rounded hover:bg-gray-500/40 transition-colors'
      href={to}
    >
      {children}
    </Link>
  )
}
