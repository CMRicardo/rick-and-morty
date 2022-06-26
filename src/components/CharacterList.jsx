import { useEffect, useState } from 'react'
import { getCharacters } from '../api/getCharacters'
import { Character, NavBar } from './'

export function CharacterList () {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharacters({ page }).then(setCharacters)
    setLoading(false)
  }, [page])

  return (
    <section>
      <NavBar page={page} setPage={setPage} />
      <ul className='grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3' >
        {
          loading
            ? <div>Loading...</div>
            : characters.map((character) => (
              <Character
                key={character.id}
                {...character}
              />
            ))
        }
      </ul>
      <NavBar page={page} setPage={setPage} />

    </section>
  )
}
