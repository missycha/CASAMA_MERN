import {useState} from 'react';
export default function addstudent() { 
    const [information, setInformation] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newInfo = {
            name: e.target.name.value,
            studentNumber: e.target.studentNumber.value,
            yearLevel: e.target.yearLevel.value,
            address: e.target.address.value,
            sex: e.target.sex.value
        };
       setInformation([...information, newInfo]);
       e.target.reset();
    };

    return(
        <div>
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label name="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label name="studentNumber">Student Number:</label>
                    <input type="text" id="studentNumber" name="studentNumber" />
                </div>
                <div>
                    <label name="yearLevel">Course Description:</label>
                    <input type="text" id="yearLevel" name="yearLevel" />
                </div>
                <div>
                    <label name="address">Year Level:</label>
                    <input type="text" id="address" name="address" />
                </div>
                <div>
                    <label name="sex">Sex:</label>
                    <select id="sex" name="sex">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer not to say">Prefer not to say</option>
                    </select>
                </div>
                <button type="submit">Add Student</button>
            </form>
            {information.map((info, index) => (
                <div key={index}>
                    <p>Name: {info.name}</p>
                    <p>Student Number: {info.studentNumber}</p>
                    <p>Year Level: {info.yearLevel}</p>
                    <p>Address: {info.address}</p>
                    <p>Sex: {info.sex}</p>
                </div>
            ))}
        </div>
    )
}