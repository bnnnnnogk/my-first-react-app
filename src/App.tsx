import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="KONGZ" />
      <Greeting name="KONGZ" />
    </div>
  )
}

export default App
