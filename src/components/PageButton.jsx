import { motion } from 'framer-motion'

export function PageButton({ onClick, page }) {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      whileHover={{
        scale: 1.1,
      }}
      disabled={page === 0}
      className='text-white bg-gradient-to-br from-accent to-indigo-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:opacity-90 transition-opacity disabled:opacity-70 focus:outline-none focus:ring focus-visible:ring-accent ring-offset-8 ring-offset-transparent'
      onClick={onClick}
    >
      Page: {page}
    </motion.button>
  )
}
