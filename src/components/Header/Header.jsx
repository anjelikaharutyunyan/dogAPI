import React from 'react'
import { Link } from "react-router-dom"
import SwitchToggle from '../SwitchToggle/SwitchToggle'

const Header = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Link to='/'><h3>Breed List</h3></Link>
                <Link to='/randomDogImage'><h3>Random Dog Image</h3></Link>
                <SwitchToggle />
            </div>
        </>
    )
}

export default Header