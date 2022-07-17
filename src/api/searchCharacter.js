import { API_URL } from '.'

export async function searchCharacter({ keyword = 'Rick Sanchez' }) {
  keyword.trim()

  if (keyword.length < 3) return

  const response = await fetch(`${API_URL}/character/?name=${keyword}`)
  const { results, info } = await response.json()
  return { results, info }
}
