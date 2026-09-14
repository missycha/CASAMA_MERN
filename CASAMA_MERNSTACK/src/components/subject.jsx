function Subject({schedCode, subjectName, classSchedule}){
    return(
        <div className="bg-white p-6 rounded-x1 shadow-1g">
            <div className="container mx-auto">
                <p>Schedule Code: {schedCode}</p>
                <p>subjectName: {subjectName}</p>
                <p>Class Schedule: {classSchedule}</p>
            </div>
        </div>
        
    )
}
export default Subject;