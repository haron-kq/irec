'use client'
import { useQuery } from '@tanstack/react-query'
import { decrement, increment } from '../../features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { FaBeer } from 'react-icons/fa'

const fetchCounterData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Counter = () => {
  const count = useAppSelector((state) => state.counter?.value)
  const dispatch = useAppDispatch()

  const { data, error, isLoading } = useQuery({
    queryKey: ['counterData'],
    queryFn: fetchCounterData,
    staleTime: 1000 * 60 * 5, // Example option
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching data: {error.message}</div>

  return (
    <div className="rounded bg-red-100 p-4 shadow-lg">
      <h2 className="flex flex-auto text-3xl">
        {' '}
        <FaBeer />
      </h2>
      <h1 className="mb-4 text-center text-2xl font-bold">Counter: {count} </h1>
      <div className="mb-4 space-x-2 text-center">
        <button
          onClick={() => dispatch(increment())}
          className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
      <div className="mt-4 rounded border bg-black p-2 text-center">
        <span className="text-xs text-green-500">
          API Data: {data ? JSON.stringify(data) : 'No data available'}
        </span>
      </div>
    </div>
  )
}

export default Counter
