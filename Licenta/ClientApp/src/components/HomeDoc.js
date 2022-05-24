import React from 'react'
import TablePgrDoc from './TablePgrDoc'

import './Form.css'
import NavbarDoc from './Navbar/NavBarDoc'

function HomeDoc() {
  return (
    <>
    <NavbarDoc/>
    <div className='Title-Doc' >Bine Ati venit </div>

    <div>
        <TablePgrDoc/>
    </div>
    </>
  )
}

export default HomeDoc