import Feature from "./Feature";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FeatureStyle from './Features.module.css'



const Features = () => {
    return (
        <div className={FeatureStyle.feature}>
            <Feature icon={<SmartphoneIcon style={{width: 40, height: 32,}}/>} title='Что вы хотите увидеть' desc = 'Опишите какие виды достопремечательностей вы бы хотели посетить.'/> 
            <Feature icon={<SmartphoneIcon style={{width: 40, height: 32,}}/>} title='Создание маршрутов' desc = 'После описание мест которые вы хотите посетить вам выдадут ближайшие места и цены'/> 
            <Feature icon={<SmartphoneIcon style={{width: 40, height: 32,}}/>} title='Сравнение' desc = 'Сравнивайте места по разным критериям например: цена, дальность и время работы'/> 
        </div>
    )
}

export default Features;