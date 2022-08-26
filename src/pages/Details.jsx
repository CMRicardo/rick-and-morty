import { useEffect, useState } from 'react'
import { getSingleCharacter } from '../api'
import { Character, PageHeading, Spinner } from '../components'

export function Details({ params }) {
  const { id } = params
  const [character, setCharacter] = useState()

  useEffect(() => {
    getSingleCharacter(id).then((res) => {
      setCharacter(res)
    })
  }, [])

  return character ? (
    <>
      <PageHeading>Details of {character.name}</PageHeading>
      <div className='grid gap-4 items-center sm:grid-cols-2 place-items-center max-w-4xl'>
        <Character {...character} />
        <section className='text-xl'>
          <ul className='grid gap-2'>
            <li>
              <span className='font-bold text-lg'>Last known location: </span>
              <p>{character.location.name}</p>
            </li>
            <li>
              <span className='font-bold text-lg'>Gender: </span>
              <p>{character.gender}</p>
            </li>
            <li>
              <span className='font-bold text-lg'>Has appeared in: </span>
              <p>{character.episode.length} episodes</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  ) : (
    <Spinner />
  )
}
