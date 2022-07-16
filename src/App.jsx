import { Route } from 'wouter'
import { CharacterList, Header, Navbar, Footer } from './components'
import { About, Details } from './pages'

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className='p-8 min-h-screen m-auto bg-gradient-to-b from-black to-slate-900 text-slate-50 grid gap-4 place-items-center'>
        <Route path='/' component={CharacterList} />
        <Route path='/about' component={About} />
        <Route path='/characters/:id' component={Details} />
      </main>
      <Footer />
    </>
  )
}
