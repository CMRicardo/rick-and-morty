import { Link } from 'wouter'

export function Character({ id, image, name, status, species, origin }) {
  return (
    <>
      <Link
        className='hover:grayscale transition-colors peer'
        href={`/characters/${id}`}
      >
        <img src={image} alt={`${name}'s image`} className='rounded-full' />
        <h3 className='text-3xl'>{name}</h3>
        <p>
          <span className='font-bold text-lg'>Species: </span>
          {species}
        </p>
        <p>
          <span className='font-bold text-lg'>Origin: </span>
          {origin.name}
        </p>
        <p>
          <span className='font-bold text-lg'>Status: </span>
          {status}
        </p>
      </Link>
    </>
  )
}
