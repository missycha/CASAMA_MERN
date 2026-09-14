import Home from "../pages/Home.jsx";
import Students from "../pages/Students.jsx";
import {Link} from "react-router-dom";

export default function Navbar(){

    return(
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <Link to="/" className="text-x1 font-bold mr-4">Home</Link>
                <Link to="/students" className="text-x1 font-bold">Students</Link>
            </div>
        </nav>
    )
}