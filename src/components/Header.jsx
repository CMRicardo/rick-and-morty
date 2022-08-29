import './styles/Header.css'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='grid place-items-center header-bg min-h-[80vh] md:min-h-[85vh] brightness-75'
      >
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          src='/images/Rick_and_Morty.png'
          alt='Rick and Morty logo'
        />
      </motion.header>
    </>
  )
}
