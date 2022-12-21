import { Routes, Route } from "react-router-dom"
import PhoneDetails from "../pages/Details/Details"
import List from "../pages/List/List"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<p>The Phone Cave</p>} />
            <Route path="/list" element={<List />} />
            <Route path="/details/:phone_id" element={<PhoneDetails />} />
        </Routes>
    )
}

export default AppRoutes