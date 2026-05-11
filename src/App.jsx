import { useEffect, useState } from 'react'

function App() {



  const [actresses, setActresses] = useState([])
  const [actors, setActor] = useState([])
  const apiUrl = 'https://lanciweb.github.io/demo/api/actresses/'
  const apiUrl2 = ' https://lanciweb.github.io/demo/api/actors/'

  function getActors() {
    fetch(apiUrl)
      .then(resActress => resActress.json())
      .then(data => setActresses(data))
    fetch(apiUrl2)
      .then(resActors => resActors.json())
      .then(data => setActor(data))
  }

  useEffect(getActors, [])

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

      <h1>Actors</h1>
      <div className="container">
        <div className="row">
          {actors.map(actor => (
            <div className="col 12 col-sm-6 col-md-4" key={actor.id}>
              <div className="card h-100">
                <img src={actor.image} alt="" className='card-img-top actor-img' />
                <div className="card-body">

                  <div>
                    <strong>Nome: </strong>{actor.name}
                  </div>
                  <div>
                    <strong>Anno di Nascita: </strong>{actor.birth_year}
                  </div>
                  <div>
                    <strong>Nazionalità: </strong>{actor.nationality}
                  </div>
                  <div>
                    <strong>Biografia: </strong>{actor.biography}
                  </div>
                  <div>
                    <strong>Riconoscimenti: </strong>{actor.awards}
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
