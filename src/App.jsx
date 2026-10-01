import Homepage from "./component/Homepage/Homepage"
import Register from "./component/Auth/register"
import { Route, Routes } from "react-router-dom"
function App() {


  return (
    <Routes>
      
      <Route path="/" element={<Homepage />} />

      <Route path="/register" element= { <Register />} />
      
    </Routes>
  )
}

export default App
