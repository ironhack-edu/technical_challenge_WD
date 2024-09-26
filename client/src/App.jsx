import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Phones from "../pages/Phones";
import PhoneDetails from "../pages/PhoneDetails";
import "./index.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:phoneId" element={<PhoneDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
