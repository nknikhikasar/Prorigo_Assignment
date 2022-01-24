import react, { useState } from "react";
import { variables } from "./variables";
import { useNavigate } from 'react-router-dom';
import "./Sam.css";
import { render } from "@testing-library/react";
let Id = 0;
let Name = "";
let Age = 0;
let City = "";
let x = "Add Employee";
let y = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
</svg>;
export const Home = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [employees, setEmployee] = useState([]);
    let history = useNavigate();

    function refreshList() {
        fetch(variables.API_URL)
            .then(response => response.json())
            .then(data => {
                setEmployee(data);
            });

    }
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
    function txtbox(Id1, Name1, Age1, City1) {
        Id = Id1;
        Name = Name1;
        Age = Age1;
        City = City1;
    }
    function deleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variables.API_URL + id, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            fetch(variables.API_URL)
                .then(res => res.json())
                .then((result) => {
                    refreshList();
                }, (error) => {
                    alert('Failed');
                })
        }
    }
    function entryBox() {
        return (
            <div>

                <label>
                    Id:
                    <input className="txtbox1" type="text" name="Id" value={Id} placeholder="Id" onChange={changeEmployeeId} />
                </label><br></br>
                <label>
                    Name:
                    <input className="txtbox2" type="text" name="Name" value={Name} placeholder="Name" onChange={changeEmployeeName} />
                </label><br></br>
                <label>
                    Age:
                    <input className="txtbox3" type="text" name="Age" value={Age} placeholder="Age" onChange={changeEmployeeAge} />
                </label><br></br>
                <label>
                    City:
                    <input className="txtbox4" type="text" name="City" value={City} placeholder="City" onChange={changeEmployeeCity} />
                </label><br></br><br></br>
                <button className="marginbutton" type="submit" onClick={() => updateClick()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>Update</button>
                <button type="button" onClick={() => setShow(prev => false)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>cancel</button>
            </div>);
    }
    function addentryBox() {
        return (
            <div >

                <label>
                    Id:
                    <input className="txtbox1" type="text" name="Id" placeholder="Id" onChange={changeEmployeeId} />
                </label><br></br>
                <label>
                    Name:
                    <input className="txtbox2" type="text" name="Name" placeholder="Name" onChange={changeEmployeeName} />
                </label><br></br>
                <label>
                    Age:
                    <input className="txtbox3" type="text" name="Age" placeholder="Age" onChange={changeEmployeeAge} />
                </label><br></br>
                <label>
                    City:
                    <input className="txtbox4" type="text" name="City" placeholder="City" onChange={changeEmployeeCity} />
                </label><br></br><br></br>
                <button className="marginbutton" type="submit" onClick={() => createClick()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>Add</button>
            </div>);
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
    }
    function isTrue(a) {
        let l;
        if (a == "Add Employee") {
            l = "Cancel";
            y = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>;
            return l;
        }
        else {
            l = "Add Employee";
            y = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
            </svg>;
            return l;
        }
    }
    function updateClick() {
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
                refreshList();
            }, (error) => {
                alert('Failed');
            })
        history('/home');
    }
    return (
        <div>
            {refreshList()}
            <h1>Employee Details</h1>
            <table border='1' >
                <thead>
                    <tr>
                        <th>EmployeeId</th>
                        <th>EmployeeName</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(em =>
                        <tr key={em.Id}>
                            <td>{em.Id}</td>
                            <td>{em.Name}</td>
                            <td>{em.Age}</td>
                            <td>{em.City}</td>
                            <td><button type="button" onClick={() => deleteClick(em.Id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></button></td>
                            <td><button type="button" onClick={() => { setShow(prev => !prev); txtbox(em.Id, em.Name, em.Age, em.City); }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>update</button></td>

                        </tr>
                    )}
                </tbody>

            </table>

            <div>{show && entryBox()}</div>
            <div>
                <button type="button" onClick={() => { setShow2(prev => !prev); x = isTrue(x); }}>{y} {x}</button>
                {show2 && addentryBox()}
            </div>
        </div>

    )


}
export default Home;