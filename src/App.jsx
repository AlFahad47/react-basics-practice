import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Student from './Student'
function App() {
  
  return (
    <>
    <Header/>
    <Food/>
    <Card/>
    <Student age={18} isStudent={true} name="Fahad Molla" />
    <Student age="25" isStudent={false} name="Abdul kalam" />
    <Student age={12} isStudent={true} name="Hero Alom" />
    <Student/>
    <Footer/> 
    </>
  )
}

export default App
