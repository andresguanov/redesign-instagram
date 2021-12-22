import { Header } from '../Header'
import { Posts } from '../Posts'
import { Highlights } from '../Highlights'
import { Photos } from '../Photos'
import './App.css'

function App() {

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
