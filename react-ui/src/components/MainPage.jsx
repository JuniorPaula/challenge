import React from 'react'
import NavBar from './NavBar'
import NavPage from './NavPage'
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
        <div className='grid grid-cols-12 h-screen'>
          <div className='col-span-2 sidebar'>
            <SideBar />
          </div>

          <div className='col-span-10 navpage'>
            <NavPage />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default MainPage