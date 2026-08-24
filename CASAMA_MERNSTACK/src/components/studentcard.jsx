function studentCard({name, age, birthday, studNum, course}){
    return(
        <div className="bg-white p-6 rounded-x1 shadow-1g">
            <div className="container mx-auto">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Birthday: {birthday}</p>
                <p>Student Number: {studNum}</p>
                <p>Course: {course}</p>
            </div>
        </div>
        
    )
}
export default studentCard;