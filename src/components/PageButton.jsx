
export default function PageButton ({ onClick, page }) {
  return (
    <button disabled={page === 0} className='bg-red-700 text-slate-100 py-1 px-2 rounded disabled:opacity-70'
      onClick={onClick}
    >
      Page: {page}
    </button>
  )
}
