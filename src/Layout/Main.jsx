import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Contactform from "../Shared/Footer/Contactform";
// import Contact from "../Shared/Footer/Contact";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Contact></Contact> */}
            <Contactform></Contactform>
        </div>
    );
};

export default Main;