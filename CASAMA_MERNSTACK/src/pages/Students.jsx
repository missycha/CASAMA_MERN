import students from "../data/students.json";
import StudentCard from "../components/studentcard";

export default function Students() {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          studentNumber={student.studentNumber}
          yearLevel={student.yearLevel}
          address={student.address}
          course={student.course}
        />
      ))}
    </div>
  );
}