import { Route, Routes } from "react-router-dom"
import AddContact from "./pages/AddContact"
import EditContact from "./pages/EditContact"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/add-contact" element = {<AddContact />}/>
        <Route path="/edit-contact/:id" element = {<EditContact />}/>
      </Routes>
    </>
  )
}

export default App
