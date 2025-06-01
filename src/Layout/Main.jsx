import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Contactform from "../Shared/Footer/Contactform";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
// import CustomCursor from "../Components/CustomCursor/CustomCursor";
// import Contact from "../Shared/Footer/Contact";

const Main = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading delay for entrance animation
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    // Prevent scrolling during loader
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [loading])

    return (
        <>
            {
                loading ? (<>
                    {/* <div className="w-full h-64 flex justify-center items-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#f4278d] border-solid"></div>
                    </div> */}
                    <div className="bg-[#111723] min-h-screen">
                        <Loader></Loader>
                    </div>

                </>)

                    :

                    (<>
                        <div>
                            {/* <CustomCursor></CustomCursor> */}
                            <Navbar></Navbar>
                            <Outlet></Outlet>
                            {/* <Contact></Contact> */}
                            <Contactform></Contactform>
                            <Footer></Footer>
                        </div>

                    </>)
            }

        </>
    );
};

export default Main;