import {Routes, Route} from 'react-router-dom'
import PhonesListPage from '../pages/PhonesList/PhonesListPage'
import PhonesDetails from '../pages/PhonesDetails/PhonesDetails'
import HomePage from '../pages/HomePage/HomePage'

const AppRoutes = () => {

    return (
        <Routes>
           <Route path="/" element={<HomePage/>} />
            <Route path="/phones" element={<PhonesListPage/>} />
            <Route path="/phones/:phone_id" element={<PhonesDetails />} />
        </Routes>
        
    )
}

export default AppRoutes