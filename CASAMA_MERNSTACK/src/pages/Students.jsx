import students from "../data/students.json";
import StudentCard from "../components/studentcard";

export default function Students() {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student = {student}
        />
      ))}
    </div>
  );
}