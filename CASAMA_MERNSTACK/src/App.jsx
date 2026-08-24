import StudentCard from "./components/studentcard";

function App(){
    return(
      <div className="min-h-screen bg-cyan-100 py-100">
        <StudentCard name="Charlize" age={20} birthday="November 07, 2005" studNum={202402699} course="BSIT"/>
      </div>
    )
}
export default App;