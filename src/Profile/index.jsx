import { useEffect, useState } from 'react'
import { getUserInfo } from '../services'

import './Profile.css'

export const Profile = () => {
    const profileURL = 'https://static.platzi.com/media/avatars/avatars/teffcode_95d6f7fd-4ed8-4b7f-8ca2-6b732c2ec29b.jpg'

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