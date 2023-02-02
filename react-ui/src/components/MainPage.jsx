import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const MainPage = () => {
  return (
    <React.Fragment>
      {/*** heading section */}
        <section>
            <div>
              <NavBar />
            </div>
        </section>

      {/** sidebar section */}
      <section>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 bg-black h-screen pl-2'>
            <SideBar />
          </div>

          <div className='col-span-9 bg-gray-200 h-screen pl-2'></div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default MainPage