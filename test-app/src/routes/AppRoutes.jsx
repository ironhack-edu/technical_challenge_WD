import { Routes, Route } from "react-router-dom"
import PhonesListPage from "../pages/PhonesListPage/PhonesListPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="/phones" element={<PhonesListPage />} />
            <Route path="/phones/:phones_id" element={<p>Details</p>} />
        </Routes>
    )
}

export default AppRoutes