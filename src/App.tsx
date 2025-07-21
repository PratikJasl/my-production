import './App.css';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
const Home = lazy(() => import('./components/landingPage/Home'));

function App() {
    return (
        <div className='h-screen flex flex-col items-center justify-center overflow-auto scroll-smooth [scrollbar-width:none]'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default App;
