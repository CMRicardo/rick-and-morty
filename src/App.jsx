import { CharacterList } from './components'

export default function App () {
  return (
    <>
      <main className='p-8 w-screen min-h-screen m-auto bg-gradient-to-b from-slate-900 to-indigo-900 text-slate-50 grid gap-4' >
        <h1 className='font-bold text-5xl text-center' >Rick and Morty</h1>
        <CharacterList />
      </main>
    </>
  )
}
