import React from 'react'
import logo from '../assets/react.svg'
type Props = {}



const Header = (props: Props) => {
  return (
    <div className='w-full'>
        <img src={logo}/>
        Header
    </div>
  )
}

export default Header