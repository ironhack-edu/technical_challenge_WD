import { Routes, Route } from 'react-router-dom'
import PhoneList from '../components/PhoneList'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<PhoneList />} />
        </Routes>
    )
}

export default AppRoutes