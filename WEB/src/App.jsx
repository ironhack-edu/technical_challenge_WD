import { Route, Routes } from "react-router-dom";
import ListPhones from "./pages/listPhones";

function App() {
  return <div className="container py-5">
    <Routes>
      <Route path="/phones" element={<ListPhones/>}/>
    </Routes>
  </div>

}

export default App;
