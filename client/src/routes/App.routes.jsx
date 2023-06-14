import { Routes, Route } from 'react-router-dom'
import PhonePages from '../pages/PhonePages/PhonePages'
import PhoneDetailsPages from '../pages/PhoneDetailsPages/PhoneDetailsPages'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<h1>HOME 🫂</h1>} />
            <Route path="/phones" element={<PhonePages />} />
            <Route path="/phones/:id" element={<PhoneDetailsPages />} />
        </Routes>
    )
}

export default AppRoutes