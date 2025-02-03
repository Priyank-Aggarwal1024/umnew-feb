import './App.css'
import GroupStudy from './components/GroupStudy'
import Hackathon from './components/Hackathon'
import Limited from './components/Limited'
import Sessions from './components/Sessions'

function App() {

  return (
    <>
      <div className="app">
        <Limited />
        <GroupStudy/>
        <Sessions/>
        <Hackathon/>
      </div>
    </>
  )
}

export default App
