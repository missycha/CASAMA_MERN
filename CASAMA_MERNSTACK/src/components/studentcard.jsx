import {Link} from "react-router-dom";

function StudentCard({name, yearLevel, address, studentNumber, course, id}){
    return(
        <div className="bg-white p-6 rounded-x1 shadow-1g">
            <div className="container mx-auto">
                <p>Name: {name}</p>
                <p>Student Number: {studentNumber}</p>
                <p>Year Level: {yearLevel}</p>
                <p>Address: {address}</p>
                <p>Course: {course}</p>
                <Link to={`/students/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> View Details </Link>
            </div>
        </div>
        
    )
}
export default StudentCard;