import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
// this is our main App file within we put reusable Components
// we have to import our components at the top of the file if we want to use them

function App() {
  
  return(
    <>
      <Header></Header>
      <UserGreeting isLoggedIn={true}name="Mikolaj"></UserGreeting>
      <Student name="Maria" age={20} isStudent="true"></Student>
      <Card name="Fanny" text="Im from Vienna"></Card>
      <Card name="Mikolaj" text ="Im from Kielce"></Card>
      <Card name="Adrian" text="Im from Checiny"></Card>
      <Card name="Zuzanna" text="Im from Cracow"></Card>
      <Card name="Dawid" text="Im from Mojcza"></Card>
     
      <Button></Button>
      <Button></Button>
      {/* <Food/> */}
      {/* <Footer></Footer> */}
      
    </>
  );

}

export default App

// React is js library NOT A FRAMEWORK to build responsive single page applications with reusable COMPONENTS where UI updates dynamically without reloading the page
//JSX (JavaScript XML): A syntax extension that allows writing HTML-like structures within JavaScript.

// Card components - Picture title and description for example movie card

//conditional rendering = allows you to control what gets rendered in apllication based on certain condition (show hide or change components)
