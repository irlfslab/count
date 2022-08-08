import { useEffect, useState } from 'react'

export default function Count () {
  const [count, setCount] = useState(parseInt(localStorage.getItem('count')) || 0)

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  return (
    <div>
      <h1>Current count is: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  )
}
