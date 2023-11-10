import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import PhoneDetails from "./PhoneDetailsPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<PhoneDetails />} />
    </Routes>
  )

}

export default App
