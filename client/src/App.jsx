import "./App.css"
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate()

  return (
    <>
      <div style={{width: "90%", margin: "auto auto", textAlign: "center"}}>
        <h1>Pagina principall</h1>
        <Button
          variant="outline-dark"
          style={{width: "100%"}}
          onClick={() => navigate("./create")}>
          Next
        </Button>
      </div>
    </>
  )
}

export default App
