import StudentCard from "./components/studentcard";
import Subject from "./components/subject";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/Studentdetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>
    )
}
export default App;