import Feature from "./Feature";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FeatureStyle from './Features.module.css'



const Features = () => {
    return (
        <div className={FeatureStyle.feature}>
            <Feature icon={<SmartphoneIcon style={{width: 40, height: 32,}}/>} title='What you want to seeь' desc = 'Describe the types of places you would like to visit.'/> 
            <Feature icon={<SmartphoneIcon style={{width: 40, height: 32,}}/>} title='Creating routes' desc = 'After describing the places you want to visit you will be given the nearest places and prices'/> 
            <Feature icon={<SmartphoneIcon style={{width: 40, height: 32,}}/>} title='Comparison' desc = 'Compare locations based on different criteria e.g. price, range and operating time'/> 
        </div>
    )
}

export default Features;