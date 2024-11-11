import { useEffect, useState } from 'react';
import RoadmapStyle from './Roadmap.module.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Arrow from './assets/arrow.png'
import axios from 'axios';

import expo from './assets/111.png'
import khan from './assets/1110.png'
import dvorec from './assets/11111.png'


const Roadmap = () => {
    const [res, setRes] = useState([])
    const [place, setPlace] = useState([])
    const [position, setPosition] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            setPosition({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            console.log(`Here is my position ${position.coords.latitude} and ${position.coords.longitude}`);
          });
        } else {
          console.log("Geolocation is not supported");
        }

        axios.get(`http://127.0.0.1:8000/get_location/?latitude=51.1561&longitude=71.4677`).then(response => {
            console.log(response.data.nearest_landmarks)
            setRes(response.data.nearest_landmarks)
        })
        

      }, []);


    return (
        <div className={RoadmapStyle.raodmapContainer}>
            <div className={RoadmapStyle.leftSideCard}>
                <img src={Arrow} alt="" className={RoadmapStyle.arrow}/>
                <img src={expo} style={{borderRadius: 20}} alt="" />
                <div className={RoadmapStyle.info}>
                    <h3>Expo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam architecto deserunt ullam amet saepe corrupti numquam tempora veritatis nesciunt reiciendis, optio recusandae quisquam sit sint culpa ipsum aperiam incidunt harum.</p>
                    <div>
                        <LocalPhoneIcon />
                        Phone: 87081193787
                    </div>
                    <div>
                        <LocalPhoneIcon />
                        Address: Mangilik El street 1
                    </div>
                    <div>
                        <LocalPhoneIcon />
                        Work schedule: 7:00 AM - 8:00 PM
                    </div>
                </div>
            </div>
            <div className={RoadmapStyle.rightSideCard}>
                <img src={Arrow} alt="" className={RoadmapStyle.arrow2}/>
                <div className={RoadmapStyle.info}>
                    <h3>Khan-Shatyr</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti vero porro quos voluptatem ad nostrum vitae accusamus quibusdam dolor? Harum, provident. Doloremque temporibus distinctio perspiciatis exercitationem rem vel consequatur!</p>
                    <div>
                        <LocalPhoneIcon />
                        Phone: 87081193787
                    </div>
                    <div>
                        <LocalPhoneIcon />
                        Address: Mangilik El street 1
                    </div>
                    <div>
                        <LocalPhoneIcon />
                        Work schedule: 7:00 AM - 8:00 PM
                    </div>
                </div>
                <img src={khan} style={{borderRadius: 20}} alt="" />
            </div>
            <div className={RoadmapStyle.leftSideCard}>
                <img src={dvorec} alt="" style={{borderRadius: 20}}/>
                <div className={RoadmapStyle.info}>
                    <h3>Palace of independence</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates eligendi reiciendis. Sint, excepturi natus asperiores soluta voluptatum consequuntur quos nam maiores. Aspernatur nostrum praesentium veritatis sint? Tenetur, suscipit rerum!</p>
                    <div>
                        <LocalPhoneIcon />
                        Phone: 87081193787
                    </div>
                    <div>
                        <LocalPhoneIcon />
                        Address: Mangilik El street 1
                    </div>
                    <div>
                        <LocalPhoneIcon />
                        Work schedule: 7:00 AM - 8:00 PM
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Roadmap;