import { API_URL } from '.'

export async function getCharacters({ page }) {
  const response = await fetch(`${API_URL}/character?page=${page}`)
  const { results } = await response.json()
  return results
}
