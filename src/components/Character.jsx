
export function Character ({ id, image, name, status, species, origin }) {
  return (
    <li className='grid gap-2 max-w-sm' >
      <img src={image} alt={`${name}'s image`} className='rounded-full' />
      <h3 className='text-3xl' >{name}</h3>
      <p><span className='font-bold text-lg' >Status:</span> {status}</p>
      <p><span className='font-bold text-lg' >Species:</span> {species}</p>
      <p><span className='font-bold text-lg' >Origin:</span> {origin.name}</p>
    </li>
  )
}
