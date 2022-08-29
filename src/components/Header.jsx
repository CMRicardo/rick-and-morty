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
          animate={{
            scale: [0.2, 1],
            rotate: [0, 180, 270, 360],
          }}
          src='/images/Rick_and_Morty.png'
          alt='Rick and Morty logo'
        />
      </motion.header>
    </>
  )
}
