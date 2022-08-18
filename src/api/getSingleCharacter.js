import { API_URL } from '.'

export async function getSingleCharacter(id = 1) {
  const response = await fetch(`${API_URL}/character/${id}`)
  const character = await response.json()
  return character
}
