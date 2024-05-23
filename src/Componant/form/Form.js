import React, { useEffect, useState } from "react";
import './Form.css';

function Form() {
    const [formvalue, setformvalue] = useState({
        task: "",
        checked: false,
    });
    const [submitdata, setsubmitdata] = useState([]);
    const [updatedata, setupdatedata] = useState("");
    const [indexvalue, setindexvalue] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [all, setall] = useState("");

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformvalue({ ...formvalue, [name]: value })
    }

    const submit = () => {
        if (updatedata === true) {
            const data = submitdata;
            data.splice(indexvalue, 1, formvalue)
            setupdatedata(false)
            localStorage.setItem('data', JSON.stringify(submitdata));
        }
        else {
            submitdata.push(formvalue)
            localStorage.setItem('data', JSON.stringify(submitdata));
            // setsubmitdata([...submitdata, formvalue])
            setformvalue({
                task: "",
                checked: false
            })
            setupdatedata(false)
        }
    }

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('data')) || [];
        setsubmitdata(storedData);
    }, []);

    const update = (item, index) => {
        setupdatedata(true)
        setformvalue(item)
        setindexvalue(index)
    }

    const deletedata = (index) => {
        let data = submitdata.filter((v, i) => {
            return !i === index;
        })
        setsubmitdata(data)
    }

    const check = (index) => {
        var checkbox = [...submitdata]
        if (checkbox[index].checked === true) {
            checkbox[index].checked = false
        }
        else {
            checkbox[index].checked = true
        }
        setsubmitdata(checkbox)
    }

    const searchvalue = () => {
        setall(submitdata)
        let searchdata = submitdata.filter((v) => {
            return v.task == searchInput
        })
        setsubmitdata(searchdata)
    }

    const alldata = () => {
        setsubmitdata(all)
    }

    const checkdata = () => {
        setall(submitdata)
        let checkdata = submitdata.filter((v) => {
            return v.checked === true
        })
        setsubmitdata(checkdata)
    }

    const notcheckdata = () => {
        setall(submitdata)
        let uncheckdata = submitdata.filter((v) => {
            return v.checked === false
        })
        setsubmitdata(uncheckdata)
    }

    return (
        <div>
            <div className="main_data">
                <div className="main_border">
                    <div>
                        <h1 className="text">{updatedata === true ? "Update" : "Enter"} Task</h1>
                    </div>
                    <div className="username">
                        <input name="task" type="text" id="user" placeholder="Enter Your Task" value={formvalue.task} onChange={handlechange} />
                        <input type="text" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} />

                    </div>
                    <div>
                        <button className="sub" onClick={() => submit()}>Submit</button>
                        <button className="sub" onClick={() => searchvalue()}>SEARCH</button>
                        <button className="sub" onClick={() => alldata()}>ALL</button>
                        <button className="sub" onClick={() => checkdata()}>Check Data</button>
                        <button className="sub" onClick={() => notcheckdata()}>NotCheck Data</button>

                    </div>
                </div>
            </div>

            <table border={1} align="center" cellSpacing={20} cellPadding={20} style={{ marginTop: " 30px", marginBottom: "30px" }} >
                {
                    submitdata.map((item, index) => {

                        return (
                            < tr >
                                <td><input type="checkbox" checked={item.checked} name="datacheck" id="" onChange={() => check(index)}></input></td>
                                <td>{index + 1}</td>
                                <td id={index} style={{ textDecoration: item.checked === true ? 'line-through' : 'none' }}>{item.task}</td>
                                <td><button onClick={() => update(item, index)} disabled={item.checked === true}>Update</button></td>
                                <td><button onClick={() => deletedata(index)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div >
    );
}

export default Form;
