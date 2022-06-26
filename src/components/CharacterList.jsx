import { useEffect, useState } from 'react'
import { Character, NavBar } from './'

export function CharacterList () {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData () {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const { results } = await response.json()
      setCharacters(results)
    }
    fetchData()
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
