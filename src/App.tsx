import './App.css'
import Title from './components/Title'
import Box from './components/Box'
import DistortedSphere from './components/DistortedSphere'
import Vehichle from './components/Vehichle'

function App() {

  return (
    <div className="App">
      <Title  title='Hi There, Welcome...'/>
      <Box />
      <Title  title='Distorted shape'/>
      <DistortedSphere />
      <Title  title='Iphone 13 pro'/>
      <Vehichle />
    </div>
  )
}

export default App
