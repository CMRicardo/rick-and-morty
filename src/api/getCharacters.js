export async function getCharacters({ page }) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  )
  const { results } = await response.json()
  return results
}
