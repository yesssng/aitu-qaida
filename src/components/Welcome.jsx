import { Button } from '@mui/material';
import welcomePage from './Welcome.module.css'
import Robot from './assets/robot.jpg'

const Welcome = () => {
    return (
        <div className={welcomePage.welcome}>
            <div className={welcomePage.welcomeDesc}>
                <h1>Build the path of your dreams</h1>
                <p>A unique adventure awaits you, and it will begin with an amazing conversation with the Astana Tourist Bot made by Adil Yessengarin, Bauyrzhan Zeinoldaev, Raiymbek Zhumanaliuly</p>
                <div className={welcomePage.welcomeAction}>
                    <Button variant="contained"  style={{fontSize: '0.8rem', borderRadius: '0', backgroundColor: '#0065F2', width: 150}}>Start</Button>
                    <p>AI will help find the best solution for your comfort</p>
                </div>
            </div>
            <img src={Robot} alt="" className={welcomePage.robot}/>
        </div>
    )
}

export default Welcome;