import { useState } from 'react'
import { useLocation } from 'wouter'
import { SearchIcon } from './SearchIcon'

export function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()

  const handleOnSubmit = (evt) => {
    evt.preventDefault()
    if (keyword.length < 3) return
    setKeyword('')
    setLocation(`/search-results/${encodeURI(keyword)}`)
  }
  const handleOnChange = (evt) => {
    const value = evt.target.value
    setKeyword(value)
  }

  return (
    <form className='flex gap-0' onSubmit={handleOnSubmit}>
      <input
        className='px-2 py-1 placeholder:text-slate-500 text-slate-900 rounded rounded-r-none focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent'
        placeholder='Search a character!'
        type='text'
        onChange={handleOnChange}
        value={keyword}
      />
      <button
        className='px-2 py-1 bg-gray-700 rounded rounded-l-none focus:outline-none focus:ring focus-visible:ring-accent ring-offset-4 ring-offset-transparent'
        aria-label='Search a character!'
      >
        <SearchIcon />
      </button>
    </form>
  )
}
