import List from "./Components/List/List"
import Display from "./Components/Display/Display"
import { useState } from "react"
function App() {
  const [chosenPhoneId, setChosenPhoneId] = useState(null)
  return (
    <>
      <List setChosenPhoneId={setChosenPhoneId} />
      {chosenPhoneId===null ? 
        (<p>No phone selected...</p>) :
          <Display chosenPhoneId={chosenPhoneId}/>
      }

    </>
  )
}

export default App
