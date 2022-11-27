import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import AllBrand from '../../Pages/Home/AllBrands/AllBrand';
import Home from '../../Pages/Home/Home/Home';
import IndividualBrands from '../../Pages/IndividualBrands/IndividualBrands';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brandsCollection')
                
            },
            {
                path: '/allbrand',
                element: <AllBrand></AllBrand>,
            },
            {
                path: '/allbrand/:brands_id',
                element: <PrivateRoute><IndividualBrands></IndividualBrands></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/brandsCollection/${params.brands_id}`) ,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;