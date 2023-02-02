import React from 'react'
import axios from 'axios'

const States = () => {
  const [states, setStates] = React.useState([])

  const getStates = async () => {
    try {
      const response = await axios.get('http://localhost:4000/states/load')
      const data = response.data

      setStates(data)
    } catch (error) {
      console.log('[ERROR]:', error)
    }
  }

  React.useEffect(() => {
    getStates()
  },[])

  return (
    <React.Fragment>
      <section>
        <div className='page-container'>
          <h2 className='main-title'>Lista de estados</h2>
          {states.length === 0 ? <p>Carregando...</p> : (
          states.map((state, index) => (
            <ul key={index}>
              <li className='states-list'>{state.name}</li>
            </ul>
          ))
          )}
        </div>
      </section>
    </React.Fragment>
  )
}

export default States