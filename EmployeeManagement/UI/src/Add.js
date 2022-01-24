import react from "react";
import { variables } from "./variables";
import { useNavigate } from 'react-router-dom';
let Id = 0;
let Name = "";
let Age = 0;
let City = "";

export const Add = () => {
    let history = useNavigate();
    function changeEmployeeId(e) {
        Id = e.target.value;
    }
    function changeEmployeeName(e) {
        Name = e.target.value;
    }
    function changeEmployeeAge(e) {
        Age = e.target.value;
    }
    function changeEmployeeCity(e) {
        City = e.target.value;
    }
    function createClick() {
        fetch(variables.API_URL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: Id,
                Name: Name,
                Age: Age,
                City: City
            })
        })
            .then(res => res.json())
            .then((result) => {
            }, (error) => {
                alert('Record is already exist');
            })
        history('/home');
    }
    function updateClick(em) {
        fetch(variables.API_URL, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: Id,
                Name: Name,
                Age: Age,
                City: City
            })
        })
            .then(res => res.json())
            .then((result) => {
            }, (error) => {
                alert('Failed');
            })
        history('/home');
    }
    return (
        <div>
            <h3>Add/Update Employee Details</h3>
            <form >
                <label>
                    Id:
                    <input type="text" name="Id" placeholder="Id" onChange={changeEmployeeId} />
                </label><br></br>
                <label>
                    Name:
                    <input type="text" name="Name" placeholder="Name" onChange={changeEmployeeName} />
                </label><br></br>
                <label>
                    Age:
                    <input type="text" name="Age" placeholder="Age" onChange={changeEmployeeAge} />
                </label><br></br>
                <label>
                    City:
                    <input type="text" name="City" placeholder="City" onChange={changeEmployeeCity} />
                </label><br></br><br></br>
                <button className="marginbutton" type="submit" onClick={() => createClick()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg> Add</button>
                <button className="marginbutton" type="submit" onClick={() => updateClick()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>Update</button>
            </form>
            <div><button onClick={() => { history('/home'); }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>Home</button></div>
        </div>

    )
}
export default Add;