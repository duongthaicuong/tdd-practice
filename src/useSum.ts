import { useState } from "react"

export const useSum = () => {
  const [numbers, setNumbers] = useState<number[]>([])
  return{
    sum: numbers.reduce((sum, number) => sum + number, 0),
    add: (value: number) => {
      setNumbers((preNumbers) => ({
        ...preNumbers,
        value,
      }))
    }
  }
}