import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="min-h-[95vh]">
        <Navbar />
        <Outlet />
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