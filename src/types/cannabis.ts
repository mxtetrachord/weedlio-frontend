export type Strain = {
  strain: string,
  manufacturer: string
}

export type Method = 
  | 'joint'
  | 'blunt'
  | 'bowl'
  | 'edible'
  | 'vape pen'
  | 'dab'
  | 'dynavap'

export type Dose = {
  method: Method,
  size?: number,
  strain?: Strain
}
