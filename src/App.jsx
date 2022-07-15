import { Route } from 'wouter'
import { CharacterList, Header, Navbar } from './components'
import About from './pages/About'

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className='p-8 min-h-screen m-auto bg-gradient-to-b from-black to-indigo-900 text-slate-50 grid gap-4 place-items-center'>
        <Route path='/' component={CharacterList} />
        <Route path='/about' component={About} />
      </main>
    </>
  )
}
