import './App.css'
import Footer from './components/Footer'
import GroupStudy from './components/GroupStudy'
import Hackathon from './components/Hackathon'
import Limited from './components/Limited'
import Sessions from './components/Sessions'
import Topbar from './components/Topbar'
import Review from './pages/Review'

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
        <Review/>
      </div>
    </>
  )
}

export default App
