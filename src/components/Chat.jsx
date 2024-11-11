import { useState } from 'react';
import ChatStyle from './Chat.module.css';
import logo from './assets/q.png';
import axios from 'axios';

const Chat = () => {
    const [prompt, setPrompt] = useState('');
    const [user, setUser] = useState('');
    const [chat, setChat] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(prompt);
        setUser(prompt);

        const keywordInfo = {
            "khan shatyr": "Khan Shatyr is a unique building in Astana, Kazakhstan, representing the city's modern architecture. Its tent-like shape makes it one of the most iconic structures, housing shopping centers, entertainment venues, and restaurants.",
            "baiterek": "The Baiterek Tower symbolizes the unity of heaven and earth and represents the 'Tree of Life' in Astana. It offers a panoramic view of the city from its observation deck.",
            "nurzhol boulevard": "Nurzhol Boulevard is a prominent pedestrian street in Astana, lined with impressive buildings, monuments, and beautiful fountains, leading up to the Baiterek Tower.",
            "national museum": "The National Museum of the Republic of Kazakhstan showcases the country’s rich cultural heritage, with vast collections of artifacts, artworks, and interactive exhibits.",
            "palace of peace": "The Palace of Peace and Reconciliation, designed by Norman Foster, is a symbol of religious harmony in Kazakhstan. Its pyramid shape stands out in the cityscape, hosting conferences and exhibitions.",
            "hazrat sultan mosque": "Hazrat Sultan Mosque is one of the largest mosques in Central Asia, with a grand architectural design, blending traditional Islamic elements with modern styles.",
            "astana opera": "Astana Opera is a prominent cultural venue for opera and ballet performances. The building itself is a masterpiece of classical architecture and represents Astana's dedication to the arts.",
            "presidential palace": "The Ak Orda Presidential Palace is the official workplace of the President of Kazakhstan. The palace showcases grand architecture with a domed roof and beautiful landscaping.",
            "central concert hall": "The Kazakhstan Central Concert Hall, shaped like a giant flower, is known for its acoustics and hosts numerous concerts, performances, and cultural events.",
            "independence square": "Independence Square is a landmark celebrating Kazakhstan's independence. The square hosts the Independence Monument, surrounded by impressive fountains and sculptures.",
            "expo": "Astana Expo 2017 site is a legacy of the International Specialized Exhibition, focusing on green energy and sustainability. Its iconic sphere building is now a science museum.",
        };

        const lowerCasePrompt = prompt.toLowerCase();

        // Поиск первого совпадающего ключевого слова или его части
        const matchedKeyword = Object.keys(keywordInfo).find((keyword) => 
            keyword.split(" ").some((variation) => lowerCasePrompt.includes(variation))
        );

        if (matchedKeyword) {
            setTimeout(() => {
                setChat(keywordInfo[matchedKeyword]);
            }, 4000);
        } else {
            setChat("Information not found.");
        }

        setPrompt('');
    };

    const suggest = ['Get new places', 'Find places to eat national food', 'Sports related attractions', 'Learn more about the city'];

    return (
        <div className={ChatStyle.container}>
            <div className={ChatStyle.containerDesc}>
                <img className={ChatStyle.loop} src={logo} alt="" style={{ width: 59 }} />
                <h2>Ask your question</h2>
            </div>
            <div className={ChatStyle.messages}>
                <div className={ChatStyle.chat}>{chat}</div>
                <div className={ChatStyle.user}>{user}</div>
            </div>
            <form onSubmit={handleSubmit} action="POST" className={ChatStyle.inputForm}>
                <div className={ChatStyle.suggestContainer}>
                    <div className={ChatStyle.suggests}>
                        <button className={ChatStyle.suggest} type="button">{suggest[0]}</button>
                        <button className={ChatStyle.suggest} type="button">{suggest[1]}</button>
                    </div>
                    <div className={ChatStyle.suggests}>
                        <button className={ChatStyle.suggest} type="button">{suggest[2]}</button>
                        <button className={ChatStyle.suggest} type="button">{suggest[3]}</button>
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setPrompt(e.target.value)}
                        className={ChatStyle.input}
                        placeholder="Enter your question..."
                    />
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
};

export default Chat;
