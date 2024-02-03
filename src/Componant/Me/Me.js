import React, { useState } from 'react'

function Me() {
    const [task, settask] = useState({ Task: "", checked: false })
    const [submitdata, setsubmitdata] = useState([])
    const [updatedata, setupdatedata] = useState("")
    const [indexdata, setindexdata] = useState("")
    const [searchinpute, setsearchinpute] = useState("")
    const [alldata, setalldata] = useState("")

    const valuetargethandler = (e) => {
        const { name, value } = e.target
        settask({ ...task, [name]: value })
    }

    const submithandler = () => {
        if (updatedata === true) {
            const data = submitdata;
            data.splice(indexdata, 1, task)
            setupdatedata(false)
        }
        else {
            submitdata.push(task)
            settask({
                Task: "",
                checked: false
            })
            setupdatedata(false)
        }
    }

    const updatehandler = (item, index) => {
        setupdatedata(true)
        settask(item)
        setindexdata(index)
    }

    const deletehandler = (index) => {
        const data = submitdata.filter((v, i) => {
            return i !== index
        })
        setsubmitdata(data)
    }

    const searchvalue = () => {
        setalldata(submitdata)
        let searchdata = submitdata.filter((v) => {
            return v.Task == searchinpute
        })
        setsubmitdata(searchdata)
    }

    const allhandler = () => {
        setsubmitdata(alldata)
    }

    const checkhandler = (index) => {
        var checkbox = [...submitdata]
        if (checkbox[index].checked == true) {
            checkbox[index].checked = false
        }
        else {
            checkbox[index].checked = true
        }
        setsubmitdata(checkbox)
    }

    const checkdatahandler = () => {
        setalldata(submitdata)
        let checkdata = submitdata.filter((v) => {
            return v.checked == true
        })
        setsubmitdata(checkdata)
    }

    const notcheckdatahandler = () => {
        setalldata(submitdata)
        let notcheckdata = submitdata.filter((v) => {
            return v.checked == false
        })
        setsubmitdata(notcheckdata)
    }


    return (
        <>
            <input type="text" placeholder='Enter Your Task' onChange={valuetargethandler} name='Task' value={task.Task} />
            <input type="text" placeholder='Search Your Task' onChange={(e) => setsearchinpute(e.target.value)} />
            <button onClick={() => submithandler()}>SUBMIT</button>
            <button onClick={() => searchvalue()}>SEARCH</button>
            <button onClick={() => allhandler()}>All</button>
            <button onClick={() => checkdatahandler()}>Check</button>
            <button onClick={() => notcheckdatahandler()}>NotCheck</button>
            <table>
                {
                    submitdata.map((item, index) => {
                        return (
                            <>
                                <tr>
                                    <td><input type="checkbox" checked={item.checked} name="datacheck" id="" onChange={() => checkhandler(index)} /></td>
                                    <td>{index + 1}</td>
                                    <td style={{ textDecoration: item.checked === true ? 'line-through' : 'none' }}>{item.Task}</td>
                                    <td><button onClick={() => updatehandler(item, index)} disabled={item.checked == true}>Update</button></td>
                                    <td><button onClick={() => deletehandler(index)}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Me