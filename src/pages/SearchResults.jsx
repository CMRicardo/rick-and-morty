import { PageHeading } from '../components'

export function SearchResults({ params }) {
  const { name } = params
  return <PageHeading>Search results of {name}</PageHeading>
}
