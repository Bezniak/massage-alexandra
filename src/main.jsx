import {Suspense} from 'react'
import './18n';
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from "./context/AuthContext.jsx";
import {Preloader} from "./components/Preloader/Preloader.jsx";
import {HelmetProvider} from "react-helmet-async";

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <HelmetProvider>
        <Suspense fallback={<Preloader/>}>
            <App/>
        </Suspense>
        </HelmetProvider>
    </AuthProvider>
)
