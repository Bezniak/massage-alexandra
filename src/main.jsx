import {StrictMode, Suspense} from 'react'
import './18n';
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from "./context/AuthContext.jsx";
import {Preloader} from "./components/Preloader/Preloader.jsx";

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <StrictMode>
            <Suspense fallback={<Preloader/>}>
                <App/>
            </Suspense>
        </StrictMode>
    </AuthProvider>
)
