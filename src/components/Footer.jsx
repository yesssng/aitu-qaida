import React from 'react';
import FooterStyle from './Footer.module.css'
import gdsc from './assets/gdsc.png'
import aitu from './assets/aitu.png'
import crocos from './assets/crocos.jpg'



const Footer = () => {
    return (
        <footer className={FooterStyle.footer}>
            <ul>
                <li><img src={aitu} alt="" style={{width: 50, height: 55}}/></li>
            </ul>
        </footer>
    )
}

export default Footer;