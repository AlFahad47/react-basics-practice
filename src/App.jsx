import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
function App() {
  const fruits = [
    {id:1,name:"Banana",calories:192},
    {id:2,name:"Apple",calories:160},
    {id:3,name:"Orange",calories:102},
    {id:4,name:"Pineapple",calories:148},
  ];
  const gagets = [
    {id:1,name:"phone",calories:10000},
    {id:2,name:"Apple",calories:500},
    {id:3,name:"Orange",calories:50000},
    {id:4,name:"Pineapple",calories:30000},
  ];


  














  return (
    <>
    {/* <Header/>
    <Food/>
    <Card/>
    <Student age={18} isStudent={true} name="Fahad Molla" />
    <Student age="25" isStudent={false} name="Abdul kalam" />
    <Student age={12} isStudent={true} name="Hero Alom" />
    <Student/>
    <Footer/>  */}
    <UserGreeting isLoggedIn={true} username="Fahad Molla" />
    { fruits.length > 0 &&     <List  items={fruits} category="fruit"/> }
    
    { gagets.length > 0 &&     <List  items={gagets} category="Gagets"/> }
    



    </>
  );
}

export default App
