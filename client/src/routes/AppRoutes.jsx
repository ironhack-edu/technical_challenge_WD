import {Routes, Route} from 'react-router-dom'
import PhonesListPage from '../pages/PhonesList/PhonesListPage'
import PhonesDetails from '../pages/PhonesDetails/PhonesDetails'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<h1>inicio</h1>} />
            <Route path="/phones" element={<PhonesListPage/>} />
            <Route path="/phones/:phone_id" element={<PhonesDetails />} />
        </Routes>
        
    )
}

export default AppRoutes