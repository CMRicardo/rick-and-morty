import { motion } from 'framer-motion'
import { Link } from 'wouter'

export function Character({ id, image, name, status, species, origin }) {
  const colors = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        className='grid grid-cols-1 md:grid-cols-2  focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-transparent focus:ring-accent'
        href={`/characters/${id}`}
      >
        <img src={image} alt={`${name}'s image`} />
        <div className='grid place-items-center text-center'>
          <h3 className='text-3xl'>{name}</h3>
          <p>
            <span className='font-bold text-lg'>Species: </span>
            {species}
          </p>
          <p>
            <span className='font-bold text-lg'>Origin: </span>
            {origin.name}
          </p>
          <p className='flex place-items-center gap-2'>
            <span className='font-bold text-lg'>Status: </span>
            {status}
            <div className={`${colors[status]} h-4 w-4`} />
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
