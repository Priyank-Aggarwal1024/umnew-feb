import './App.css'
import GroupStudy from './components/GroupStudy'
import Hackathon from './components/Hackathon'
import Limited from './components/Limited'
import Sessions from './components/Sessions'
import Topbar from './components/Topbar'

function App() {

  return (
    <>
      <div className="app">
        <Topbar/>
        <Limited />
        <GroupStudy/>
        <Sessions/>
        <Hackathon/>
      </div>
    </>
  )
}

export default App
