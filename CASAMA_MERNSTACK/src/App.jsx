import StudentCard from "./components/studentcard";
import Subject from "./components/subject";
function App(){
    return(
      <div className="min-h-screen bg-black-100 py-10">
        <div className="container mx-auto">
          <h1 className="text-3x1 font-bold text-center text-black-600 mb-10">Student</h1>
        <StudentCard name="Charlize" age={20} birthday="November 07, 2005" studNum={202402699} course="BSIT"/>
        </div>

        <div className="container mx-auto">
          <h1 className="text-3x1 font-bold text-center text-black-600 mb-10">Subject</h1>
        <Subject schedCode="DCIT26" subjectName="Application Development and Emerging Technologies" classSchedule={1232}/>
        </div>
      </div>
    )
}
export default App;