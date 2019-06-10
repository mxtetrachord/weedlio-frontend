export type Strain = {
  strain: string,
  manufacturer: string,
  id?: string
}

export enum Method {
  'joint', 'blunt', 'bowl',
  'bong', 'edible', 'vape',
  'dab', 'dynavap'
}

export type Level = 'green' | 'yellow' | 'red'
 
export type Record = {
  text: string,
  id?: string,
  timestamp?: number,
}

export type Thought = Record & {
  baked: Level,
}

export type Dose = Record & {
  size?: number,
  strain?: Strain
}

