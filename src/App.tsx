import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import Footer from "./components/footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="min-h-[95vh]">
        <Navbar />
        <Outlet />
      </div>
      <div className='flex w-full justify-center p-8'>
        <a href="#root" className='flex items-center justify-center h-16 w-16 bg-gradient-to-r from from-blue-900  to-red-900 rounded-full text-gray-300'><FaArrowUp className='transition animate-[bounce_1s_infinite] w-6 h-6' /></a>
      </div>
      <Footer />
    </>

  );
}
export default function WrappedApp() {
  return (
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  );
}