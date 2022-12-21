import { Routes, Route } from "react-router-dom"
import PhonesPage from "../Pages/PhonesPage/PhonesPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<PhonesPage />} />
            <Route path="/:id" element={<PhonesPage />} />
            <Route path="/*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes