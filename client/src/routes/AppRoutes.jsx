import { Routes, Route } from "react-router-dom"
import PhoneListPage from "../pages/PhoneListPage"

const AppRoutes = () => {


    return (

        <Routes>
            <Route path="/" element={PhoneListPage} />
        </Routes>
    )
}

export default AppRoutes
