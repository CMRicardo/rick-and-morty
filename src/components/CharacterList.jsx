import { useEffect, useState } from 'react'
import { getCharacters } from '../api/getCharacters'
import { Pagination, Spinner, Character } from './'

export function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharacters({ page }).then(setCharacters)
    setLoading(false)
  }, [page])

  return (
    <section>
      <Pagination page={page} setPage={setPage} />
      <ul className='grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {loading ? (
          <Spinner />
        ) : (
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))
        )}
      </ul>
      <Pagination page={page} setPage={setPage} />
    </section>
  )
}
