import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Header from "./components/Header"
import MeetupEvents from "./components/Events"
import Footer from "./components/Footer"

export default function App(){

  return (
    <>
    <Header/>

    <main className="container mb-5">

    <MeetupEvents/>
    
    </main>

    <Footer/>
    </>
  )
}