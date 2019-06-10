import { Thought } from '../types/cannabis'

export const not = (a: any) => !a
export const isNumeric = (expr: any) =>
  (typeof expr === 'string' || typeof expr === 'number') && not(expr === '') && not(isNaN(Number(expr)))
export const newestFirst = (a: Thought, b: Thought) => (a.timestamp && b.timestamp) ? b.timestamp - a.timestamp : -1
export const pad = (s: string) => s.length === 1 ? `0${s}` : s
export const getMonthName = (n: number) => ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'][n]
export const formatDate = (n: number) => {
  const date = new Date(n)
  return `${date.getDate()} ${getMonthName(date.getMonth())} @ ${date.getHours()}:${pad(date.getMinutes().toString())}`
}
