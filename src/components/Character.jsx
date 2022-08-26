import { Link } from 'wouter'

export function Character({ id, image, name, status, species, origin }) {
  const colors = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500',
  }

  return (
    <>
      <Link
        className='hover:brightness-75 grid grid-cols-1 md:grid-cols-2 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-transparent focus:ring-accent'
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
    </>
  )
}
