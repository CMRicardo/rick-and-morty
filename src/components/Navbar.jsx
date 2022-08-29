import { Link } from 'wouter'
import { NavItem } from './NavItem'
import { SearchForm } from './SearchForm'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className='grid grid-cols-1 md:grid-cols-3 place-items-center justify-between gap-4 bg-black text-white md:sticky md:top-0 py-2 z-10'
    >
      <motion.h1
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.1 }}
        className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-accent to-yellow-300'
      >
        <Link
          className='rounded px-4 py-2 transition-colors focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent'
          href='/'
        >
          Rick and Morty
        </Link>
      </motion.h1>

      <ul className='flex gap-4 justify-center'>
        <motion.li
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <NavItem to='/about'>About</NavItem>
        </motion.li>
      </ul>
      <SearchForm />
    </motion.nav>
  )
}
