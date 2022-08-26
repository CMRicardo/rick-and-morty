import { useEffect, useState } from 'react'
import { getCharacters } from '../api'
import { CharacterList, PageHeading, Pagination, Spinner } from '../components'

export function Home() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharacters({ page }).then(setCharacters)
  }, [page])

  return (
    <section>
      <Pagination page={page} setPage={setPage} />
      <PageHeading>Character list</PageHeading>
      {characters ? <CharacterList characters={characters} /> : <Spinner />}
      <Pagination page={page} setPage={setPage} />
    </section>
  )
}
