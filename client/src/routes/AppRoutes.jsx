
import { Routes, Route } from 'react-router-dom'
import ListPhonePage from '../pages/ListPhonesPage'
import DetailsPhonePage from '../pages/DetailsPhonePage'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path={'/phones'} element={<ListPhonePage />} />

            <Route path={'/phones/:id'} element={<DetailsPhonePage />} />

            <Route path={'*'} element={<p>ERROR</p>} />


        </Routes>

    )

}
export default AppRoutes