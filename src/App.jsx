import { useEffect, useState } from 'react'

function App() {


  const [actresses, setActresses] = useState([])
  const apiUrl = 'https://lanciweb.github.io/demo/api/actresses/'

  function getActresses() {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setActresses(data))
  }

  useEffect(getActresses, [])

  return (
    <>
      <h1>Actresses</h1>
      <ul>
        {actresses.map(actress => (
          <li key={actress.id}>{actress.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
