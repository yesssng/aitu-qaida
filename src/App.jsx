import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Chat from "./components/Chat"
import './App.css'
import Features from "./components/Features"
import Roadmap from "./components/Roadmap"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Header />
    <div className="wrapper">
      <Welcome />
      <Features />
      <Chat />
      <h1 style={{textAlign: 'center', marginTop: 50, marginBottom: 20, fontWeight: 700}}>Roadmap</h1>
      <Roadmap />
    </div>
    <Footer />
    </>
  )
}

export default App
