import { Route } from 'wouter'

import { About, Details, Home, SearchResults } from './pages'
import { Header, Navbar, Footer } from './components'

import { SearchContextProvider } from './context'

export default function App() {
  return (
    <>
      <SearchContextProvider>
        <Header />
        <Navbar />
        <main className='p-8 min-h-screen m-auto bg-gradient-to-b from-black to-slate-900 text-slate-50 grid gap-4 place-items-center'>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/characters/:id' component={Details} />
          <Route path='/search-results/:keyword' component={SearchResults} />
        </main>
        <Footer />
      </SearchContextProvider>
    </>
  )
}
