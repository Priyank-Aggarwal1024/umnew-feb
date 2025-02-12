import './App.css'
import Footer from './components/Footer'
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
        <Footer/>
      </div>
    </>
  )
}

export default App
