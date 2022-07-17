import { PageHeading } from '../components'

export function Details({ params }) {
  const { id } = params

  return <PageHeading>Details of id #{id}</PageHeading>
}
