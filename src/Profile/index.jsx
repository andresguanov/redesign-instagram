import { useEffect, useState } from 'react'
import { getUserInfo } from '../services'

import './Profile.css'

export const Profile = () => {
    const profileURL = ''

    const [username, setUserName] = useState("username")
    useEffect(() => {
        getUserInfo()
            .then(data => {
                const { username } = data

                if (typeof username !== 'undefined') {

                    setUserName(username)
                }
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