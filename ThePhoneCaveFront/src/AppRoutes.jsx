import { Route, Routes } from "react-router-dom"
import PhonesPage from "./pages/PhonesPage"
import DetailsPage from "./pages/DetailsPage"
import ErrorPage from "./pages/ErrorPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/phones" element={ <PhonesPage /> }/>
            <Route path="/phones/:id" element={ <DetailsPage /> } />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}
export default AppRoutes