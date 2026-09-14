import {Link} from "react-router-dom";

function StudentCard({student}){
    return(
        <div className="bg-white p-6 rounded-x1 shadow-1g">
            <div className="container mx-auto">
                <p>Name: {student.name}</p>
                <p>Student Number: {student.studentNumber}</p>
                <p>Year Level: {student.yearLevel}</p>
                <p>Address: {student.address}</p>
                <p>Course: {student.course}</p>
                <Link to={`/students/${student.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> View Details </Link>
            </div>
        </div>
        
    )
}
export default StudentCard;