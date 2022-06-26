
export function NavBar ({ page, setPage }) {
  const nextPage = () => {
    setPage(page + 1)
  }
  const prevPage = () => {
    setPage(page - 1)
  }
  return (
    <header className='w-full flex justify-between py-4' >
      <button className='bg-red-700 text-slate-100 py-1 px-2 rounded'
        onClick={prevPage}
      >
        Page: {page - 1}
      </button>
      <span className='py-1' >{page}</span>
      <button className='bg-red-700 text-slate-100 py-1 px-2 rounded'
        onClick={nextPage}
      >
        Page: {page + 1}
      </button>
    </header >
  )
}
