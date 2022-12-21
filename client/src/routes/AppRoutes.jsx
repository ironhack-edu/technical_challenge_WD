import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Homepage/Homepage"
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails"
import PhoneList from "../pages/PhoneList/PhoneList"

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/phones" element={<PhoneList />} />
			<Route path="/phones/:phone_id" element={<PhoneDetails />} />
		</Routes>
	)
}

export default AppRoutes
