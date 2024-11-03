import { useState } from 'react'
import ChatStyle from './Chat.module.css'
import logo from './assets/q.png'
import axios from 'axios'

const Chat = () => {
    const [prompt, setPrompt] = useState('')
    const [user, setUser] = useState('')
    const [chat, setChat] = useState('')

    const obj = {
        user: 'Orken',
        message: 'Hello'
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(prompt)
        setUser(prompt)
        setTimeout(() => {
            setChat("Khan Shatyr is an unusual building in Astana, Kazakhstan, which is a symbol of the city's modern architecture. Khan Shatyr is characterized by its shape, resembling a huge tent or marquee, with many levels and platforms. It is the largest suspended building in the world, which is designed to protect from the sun's heat in the summer and from the cold in the winter. Inside Khan Shatyr there are shopping centers, entertainment complexes, restaurants and other infrastructure facilities.")
        }, 4000)
    }

    axios.post()

    const suggest = ['Get new places', 'Find places to eat national food', 'sports related attractions', 'Learn more about the city']


    return (
        <div className={ChatStyle.container}>
            <div className={ChatStyle.containerDesc}>
                <img className={ChatStyle.loop} src={logo} alt="" style={{width: 59}}/>
                <h2>Ask your question</h2>
            </div>
            <div className={ChatStyle.messages}>
                <div className={ChatStyle.chat}>{chat}</div>
                <div className={ChatStyle.user}>{user}</div>
            </div>
            <form onSubmit={handleSubmit} action="POST" className={ChatStyle.inputForm}>
                <div className={ChatStyle.suggestContainer}>
                    <div className={ChatStyle.suggests}>
                        <button className={ChatStyle.suggest} value={suggest[0]} type='button'>{suggest[0]}</button>
                        <button className={ChatStyle.suggest} value={suggest[1]} type='button'>{suggest[1]}</button>
                    </div>
                    <div className={ChatStyle.suggests}>
                        <button className={ChatStyle.suggest} value={suggest[2]} type='button'>{suggest[2]}</button>
                        <button className={ChatStyle.suggest} value={suggest[3]} type='button'>{suggest[3]}</button>
                    </div>
                </div>
                <div>
                <input type='text' onChange={e => setPrompt(e.target.value)} className={ChatStyle.input} placeholder="Введите свой запрос..."/>
                <button>Отправить</button>
                </div>
            </form>
        </div>
    )
}

export default Chat
