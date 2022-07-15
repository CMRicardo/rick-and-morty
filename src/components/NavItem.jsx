import { Link } from 'wouter'

export function NavItem({ children }) {
  return (
    <Link
      className='focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent px-4 py-2 rounded hover:bg-accent hover:text-gray-50 transition-colors'
      href={`/${children}`}
    >
      {children}
    </Link>
  )
}
