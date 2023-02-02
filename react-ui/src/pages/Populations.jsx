import React from 'react'
import axios from 'axios'

const Populations = () => {
  const [selected, setSelected] = React.useState('')
  const [states, setStates] = React.useState([])
  const [popupation, setPopulation] = React.useState({})

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

  const getStateByUF = async (value) => {
    setSelected(value)
    const uf = value.toLowerCase()
    

    try {
      const response = await axios.get(`http://localhost:4000/population/${uf}`)
      const data = response.data

      setPopulation(data)
    } catch (error) {
      console.log('[ERROR]:', error)
    }
  }

  return (
    <React.Fragment>
    <section>
      <div className='page-container'>
        <h2 className='main-title'>lista de população por estados</h2>
        <div>
          <select name="state" id="state" value={selected} onChange={value => getStateByUF(value.target.value)}>
            {states.map((state, index) => (
              <option value={state.uf} key={index}>{state.name}</option>
            ))}
          </select>
        </div>
        <div className='population'>
          <p className='population-value'><strong>Estado:</strong>{popupation.name}</p>
          <p className='population-value'><strong>UF:</strong>{popupation.uf}</p>
          <p className='population-value'><strong>População:</strong>{popupation.population}</p>
        </div>
      </div>
    </section>
  </React.Fragment>
  )
}

export default Populations