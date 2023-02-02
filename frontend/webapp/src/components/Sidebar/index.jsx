import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaSearch
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaSearch} Text="/Home" />
        <SidebarItem Icon={FaSearch} Text="/Statistics" />
        <SidebarItem Icon={FaSearch} Text="/Users" />
      </Content>
    </Container>
  )
}

export default Sidebar