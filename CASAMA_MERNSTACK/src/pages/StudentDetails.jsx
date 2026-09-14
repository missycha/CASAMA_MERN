import students from "../data/students.json";
import { useParams } from "react-router-dom";

export default function StudentDetails() {
  const { id } = useParams();
  const student = students.find(s => s.id === parseInt(id));
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      {student && (
        <div>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Student Number:</strong> {student.studentNumber}</p>
            <p><strong>Year Level:</strong> {student.yearLevel}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>Course:</strong> {student.course}</p>
        </div>
      )}
    </div>
  );
}