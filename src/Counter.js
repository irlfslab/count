import { useEffect, useState } from 'react'

export default function Counter () {
  const [counter, setCounter] = useState(parseInt(localStorage.getItem('counter')) || 0)

  useEffect(() => {
    localStorage.setItem('counter', counter)
  }, [counter])

  return (
    <div>
      <h1>Current counter is: {counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={() => setCounter(prev => prev - 1)}>-</button>
    </div>
  )
}
