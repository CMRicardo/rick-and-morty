import { PageButton } from './'

export function Pagination({ page, setPage }) {
  const nextPage = () => {
    setPage(page + 1)
  }
  const prevPage = () => {
    setPage(page - 1)
  }

  return (
    <nav className='w-full max-w-md mx-auto flex justify-between py-8 text-lg'>
      <PageButton onClick={prevPage} page={page - 1} />
      <span className='py-1'>{page}</span>
      <PageButton onClick={nextPage} page={page + 1} next={true} />
    </nav>
  )
}
