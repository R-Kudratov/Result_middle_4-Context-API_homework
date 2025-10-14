export interface Character {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'
  image: string
  created: string
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  created: string
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  created: string
}
