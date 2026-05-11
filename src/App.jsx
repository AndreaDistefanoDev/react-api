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
      <div className="container">
        <div className="row">
          {actresses.map(actress => (
            <div className="col 12 col-sm-6 col-md-4" key={actress.id}>
              <div className="card h-100">
                <img src={actress.image} alt="" className='card-img-top actress-img' />
                <div className="card-body">

                  <div>
                    <strong>Nome: </strong>{actress.name}
                  </div>
                  <div>
                    <strong>Anno di Nascita: </strong>{actress.birth_year}
                  </div>
                  <div>
                    <strong>Nazionalità: </strong>{actress.nationality}
                  </div>
                  <div>
                    <strong>Biografia: </strong>{actress.biography}
                  </div>
                  <div>
                    <strong>Riconoscimenti: </strong>{actress.awards}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default App
