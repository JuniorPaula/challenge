import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarData } from '../data/SidebarData'

const SideBar = () => {
  return (
    <React.Fragment>
        <section>
            <div className='text-white'>
              {
                SidebarData.map((item, index) => {
                  return (
                    <div key={index}>
                      <NavLink to={item.path} className='pl-7 mt-7 w-full h-4 flex justify-start items-center text-white text-2x1 space-x-1 font-bold'>
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </NavLink>
                    </div>
                  )
                })
              }
            </div>
        </section>
    </React.Fragment>
  )
}

export default SideBar