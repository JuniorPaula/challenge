import React from 'react'
import axios from 'axios'

const Home = () => {
  const [states, setStates] = React.useState([])

  const getStates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/states')
      const data = response.data.states

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
          <h2 className='main-title'>Estados</h2>
          <div className='flex flex-col'>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='overflow-hidden'>
                <table className='min-w-full'>
                    <thead className='border-b'>
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Estado</th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">UF</th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">População</th>
                    </tr>
                    </thead>
                    <tbody>
                      {states.map((state, index) => (
                        <tr key={index} className='border-b'>
                            <>
                              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{state.name}</td>
                              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{state.uf}</td>
                              <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{state.population}</td>
                            </>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home