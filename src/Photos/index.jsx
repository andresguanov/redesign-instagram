import { useEffect, useState } from 'react'
import { getUserMedia } from '../services'
import './Photos.css'


const Photo = ({ url }) => {
    return <img className="Photo" src={url} alt="image" />
}

export const Photos = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getUserMedia().then(data => {
            setPhotos(data)
        })
    }, [])

    return (
        <div className='Photos'>
            {
                photos.map(({ id, media_url }) => (
                    <Photo
                        key={id}
                        url={media_url}
                    />
                ))
            }
        </div>

    )
}