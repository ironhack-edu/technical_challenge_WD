import HomePage from "../pages/HomePage"
import DetailsPhone from "../pages/DetailsPhone"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/:phone_id' element={<DetailsPhone />}></Route>
        </Routes>
    )
}

export default AppRoutes