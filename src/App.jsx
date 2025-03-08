import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {ROUTES} from "./config/routes.js";
import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Massages from "./components/Massages/Massages.jsx";
import Massage from "./components/Massages/Massage.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import Membership from "./components/Membership/Membership.jsx";


const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            <div className="flex-grow-1">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};


const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home/>
                },
                {
                    path: ROUTES.MASSAGE,
                    element: <Massage/>
                },
                {
                    path: ROUTES.MASSAGES,
                    element: <Massages/>
                },
                {
                    path: ROUTES.ABOUT_US,
                    element: <AboutUs/>
                },
                {
                    path: ROUTES.FAQ,
                    element: <Faq/>
                },
                {
                    path: ROUTES.CONTACTS,
                    element: <Contacts/>
                },
                {
                    path: ROUTES.MEMBERSHIP,
                    element: <Membership/>
                },
                {
                    path: ROUTES.PRIVACY_POLICY,
                    element: <PrivacyPolicy/>
                },
                {
                    path: ROUTES.NOT_FOUND,
                    element: <NotFound/>
                },
            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;