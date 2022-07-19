import { useContext } from 'react'
import { CharacterList, PageHeading } from '../components'
import { SearchContext } from '../context'

export function SearchResults({ params }) {
  const { searchResults, searchInfo } = useContext(SearchContext)
  const { count, next, prev } = searchInfo
  const { name } = params

  const pluralOrSingular = count === 1 ? 'result' : 'results'

  return (
    <>
      <PageHeading id='Search results'>
        We found {count} {pluralOrSingular} of {decodeURI(name)}
      </PageHeading>
      <CharacterList characters={searchResults} />
    </>
  )
}
