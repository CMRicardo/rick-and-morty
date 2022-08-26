import { Character } from './Character'

export function CharacterList({ characters }) {
  return (
    <ul className='grid place-items-center gap-8 md:grid-cols-2'>
      {characters?.map((character) => (
        <li className='grid gap-2 max-w-lg' key={character.id}>
          <Character {...character} />
        </li>
      ))}
    </ul>
  )
}
