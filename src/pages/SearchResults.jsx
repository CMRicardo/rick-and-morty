import { useEffect, useState } from 'react'
import { searchCharacter } from '../api'
import { CharacterList, PageHeading } from '../components'

export function SearchResults({ params }) {
  const { keyword } = params

  const [searchResults, setSearchResults] = useState([])
  const [searchInfo, setSearchInfo] = useState({})

  useEffect(() => {
    searchCharacter({ keyword }).then(({ results, info }) => {
      setSearchResults(results)
      setSearchInfo(info)
    })
  }, [keyword])

  const { count } = searchInfo || 0
  const pluralOrSingular = count === 1 ? 'result' : 'results'

  return (
    <>
      <PageHeading id='Search-results'>
        We found {count} {pluralOrSingular} of "{decodeURI(keyword)}"
      </PageHeading>
      <CharacterList characters={searchResults} />
    </>
  )
}
