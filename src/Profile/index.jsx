import { useEffect, useState } from 'react'
import { getUserInfo } from '../services'

import './Profile.css'

export const Profile = () => {
    const profileURL = 'https://pps.whatsapp.net/v/t61.24694-24/s96x96/263464006_1415280628866445_2608709732658725096_n.jpg?ccb=11-4&oh=5f52cb8a2cc715f3d4907b6e07db4f07&oe=61C7D7FA'

    const [username, setUserName] = useState("")
    useEffect(() => {
        getUserInfo().then(data => {
            const { username } = data
            setUserName(username)
        })
    }, [])

    return (

        <div className='Profile'>
            <div className='container'>
                <div className='neumorphism container'>
                    <div className='gradient-effect container'>
                        <img
                            src={profileURL}
                            alt="profile" />

                    </div>

                </div>

            </div >
            <span>{username}</span>

        </div >
    )
}