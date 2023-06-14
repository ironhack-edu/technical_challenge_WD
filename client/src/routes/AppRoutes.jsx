import { Routes, Route } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import PhonesListPage from './../pages/PhonesListPage/PhonesListPage'
import PhonesDetailsPage from './../pages/PhonesDetailsPage/PhonesDetailsPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<PhonesListPage />} />
            <Route path="/phones/:id" element={<PhonesDetailsPage />} />

        </Routes>
    )
}

export default AppRoutes