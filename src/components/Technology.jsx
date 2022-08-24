import { React, Tailwind, Vite } from '../icons'

const Technologies = {
  React: <React />,
  Tailwind: <Tailwind />,
  Vite: <Vite />,
}

export function Technology({ name = 'React' }) {
  return (
    <figure className='grid place-items-center gap-2'>
      {Technologies[name]}
      <figcaption>{name}</figcaption>
    </figure>
  )
}
