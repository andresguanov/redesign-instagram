import { useEffect, useState } from 'react'
import { getUserInfo } from '../services'
import './Posts.css'

const Post = ({ name, total }) => {
    return (
        <div className="Post">
            <div className='total' >{total}</div>
            <div className='name'>{name}</div>

        </div>
    )
}

export const Posts = () => {
    const [posts, setPosts] = useState(0)
    useEffect(() => {
        getUserInfo()
            .then(data => {

                const { media_count } = data
                if (typeof media_count !== 'undefined') {
                    setPosts(media_count)

                }
            })

    })

    return (
        <div className="Posts neumorphism">
            <Post name="Posts" total={posts ?? 0} />
            <Post name="Followers" total={6} />
            <Post name="Following" total={214} />

        </div>

    )
}