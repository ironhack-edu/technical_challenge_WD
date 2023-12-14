import { Routes, Route } from "react-router-dom"
import PhoneListPage from "../pages/phoneListPage/phoneListPage"
import PhoneDetails from "../components/PhoneDetails/PhoneDetails"




const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<PhoneListPage />} />
            <Route path="/*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes