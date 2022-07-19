import { Character } from './Character'

export function CharacterList({ characters }) {
  return (
    <ul className='grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {characters.map((character) => (
        <li className='grid gap-2 max-w-sm relative' key={character.id}>
          <Character {...character} />
        </li>
      ))}
    </ul>
  )
}
