import { Header } from '../Header'
import { Highlights } from '../Highlights'
import { Photos } from '../Photos'
import { Posts } from '../Posts'
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
