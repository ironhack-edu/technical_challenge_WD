import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/phones' element={<HomePage />} />
            <Route path='/phones/:id' element={<DetailPage />} />
        </Routes>
    )
}

export default AppRoutes