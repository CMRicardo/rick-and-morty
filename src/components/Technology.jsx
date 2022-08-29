import { React, Tailwind, Vite } from '../icons'
import { motion } from 'framer-motion'
const Technologies = {
  React: <React />,
  Tailwind: <Tailwind />,
  Vite: <Vite />,
}

export function Technology({ name = 'React' }) {
  return (
    <motion.figure
      drag
      dragConstraints={{
        top: 10,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      className='grid place-items-center gap-2'
    >
      {Technologies[name]}
      <figcaption>{name}</figcaption>
    </motion.figure>
  )
}
