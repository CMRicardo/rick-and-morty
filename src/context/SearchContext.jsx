import { createContext, useState } from 'react'

export const SearchContext = createContext()

export function SearchContextProvider({ children }) {
  const [searchResults, setSearchResults] = useState([])
  const [searchInfo, setSearchInfo] = useState({})

  return (
    <SearchContext.Provider
      value={{ searchResults, searchInfo, setSearchResults, setSearchInfo }}
    >
      {children}
    </SearchContext.Provider>
  )
}
