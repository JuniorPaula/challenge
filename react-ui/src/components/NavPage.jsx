import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import States from '../pages/States'
import Populations from '../pages/Populations'

const NavPage = () => {
  return (
    <React.Fragment>
        <section>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/states' element={<States />} />
              <Route path='/population' element={<Populations />} />
            </Routes>
        </section>
    </React.Fragment>
  )
}

export default NavPage