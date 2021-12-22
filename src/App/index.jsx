import { Header } from '../Header'
import { Highlights } from '../Highlights'
import { Photos } from '../Photos'
import { Posts } from '../Posts'
import './App.css'

function App() {
  // const [username, setUserName] = useState("")
  // const [posts, setPosts] = useState(0)
  // useEffect(() => {
  //   getUserInfo().then(data => {
  //     const { username, media_count } = data
  //     setUserName(username)
  //     setPosts(media_count)
  //   })
  // })

  return (
    <div className="App">
      <Header />
      <Posts />
      <Highlights />
      <Photos />
    </div>
  )
}

export default App
