import { useEffect, useState } from 'react'
import { getCharacters } from '../api'
import {
  CharacterList,
  Header,
  PageHeading,
  Pagination,
  Spinner,
} from '../components'

export function Home() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharacters({ page }).then(setCharacters)
  }, [page])

  return (
    <section>
      <Header />
      <Pagination page={page} setPage={setPage} />
      <PageHeading>Character list</PageHeading>
      {characters ? <CharacterList characters={characters} /> : <Spinner />}
      <Pagination page={page} setPage={setPage} />
    </section>
  )
}
