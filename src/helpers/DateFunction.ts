import { DAY } from '@/common/consts/DateTime.consts'

export function getFirstDateOfMonth(year: number, month: number): Date {
  const firstDate = new Date(year, month - 1, 1)
  return firstDate
}

export function getDaysInMonth(year: number, month: number): number {
  const lastDayOfMonth = new Date(year, month, 0)
  return lastDayOfMonth.getDate()
}

export function getDayOfWeek(date: Date) {
  const dayIndex = date.getDay()
  return DAY[dayIndex]
}

// // Example for January 2024
// const year = 2024
// const month = 1 // January

// console.log(`The first date of ${month}/${year} is ${dayOfWeek}.`)
