import Header from "./components/Header"
import Footer from "./components/Footer"
import Food from "./components/Food"
import Card from "./cards/Card"
import Student from "./components/Student"

function App() {

  return (
    <div>
      <Student name="ReactJS" age={20} isGraduated={true} />
      <Student name="Node" age={22} isGraduated={true} />

    </div>
  )

}

export default App
