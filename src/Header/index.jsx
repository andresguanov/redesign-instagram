import './Header.css'

import { Profile } from "../Profile"

export const Header = () => {
    return (
        <header>
            <p><ion-icon name="create-outline"></ion-icon></p>
            <div className='neumorphism'>
                <div className='notification'></div>
                <p className='icon'>
                    <ion-icon name="chatbubble"></ion-icon>
                </p>

            </div>
            <Profile />
            <div className='neumorphism'>
                <p className='icon'>
                    <ion-icon name="heart"></ion-icon>
                </p>

            </div>

            <p><ion-icon name="settings-outline"></ion-icon>
            </p>
        </header>
    )
}