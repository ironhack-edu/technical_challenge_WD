import { Routes, Route } from 'react-router-dom'
 import Home from '../components/Home'
import PhoneDetails from '../components/PhoneDetails'

 const AppRoutes = () => {

     return (
         <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/:id' element={<PhoneDetails />}></Route>
         </Routes>
     )
 }

 export default AppRoutes
