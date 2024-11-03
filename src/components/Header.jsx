import React from 'react';
import headerStyle from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from './assets/qaida.png'



const Header = () => {
    return (
        <header className={headerStyle.header}>
            <img src={logo} style={{width: 100}} alt="" />
            <ul>
                <li>Project</li>
                <li>QChat</li>
                <li>Roadmap</li>
                <li>About us</li>
                <SearchIcon />
            </ul>
        </header>
    )
}

export default Header;