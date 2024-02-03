// import React, { useEffect, useState } from "react";
// import './Form.css';

// function Form() {
//     const [formvalue, setformvalue] = useState({
//         task: "",
//         checked: false,
//     });
//     const [submitdata, setsubmitdata] = useState([]);
//     const [updatedata, setupdatedata] = useState("");
//     const [indexvalue, setindexvalue] = useState("");
//     const [searchInput, setSearchInput] = useState("");
//     const [all, setall] = useState("");

//     const handlechange = (e) => {
//         const { name, value } = e.target;
//         setformvalue({ ...formvalue, [name]: value })
//     }

//     const submit = () => {
//         if (updatedata === true) {
//             const data = submitdata;
//             data.splice(indexvalue, 1, formvalue)
//             setupdatedata(false)
//         }
//         else {
//             submitdata.push(formvalue)
//             // setsubmitdata([...submitdata, formvalue])
//             setformvalue({
//                 task: "",
//                 checked: false
//             })
//             setupdatedata(false)
//         }
//     }

//     const update = (item, index) => {
//         setupdatedata(true)
//         setformvalue(item)
//         setindexvalue(index)
//     }

//     const deletedata = (index) => {
//         let data = submitdata.filter((v, i) => {
//             return !i == index;
//         })
//         setsubmitdata(data)
//     }

//     const check = (index) => {
//         var checkbox = [...submitdata]
//         if (checkbox[index].checked == true) {
//             checkbox[index].checked = false
//         }
//         else {
//             checkbox[index].checked = true
//         }
//         setsubmitdata(checkbox)
//     }

//     const searchvalue = () => {
//         setall(submitdata)
//         let searchdata = submitdata.filter((v) => {
//             return v.task == searchInput
//         })
//         setsubmitdata(searchdata)
//     }

//     const alldata = () => {
//         setsubmitdata(all)
//     }

//     const checkdata = () => {
//         setall(submitdata)
//         let checkdata = submitdata.filter((v) => {
//             return v.checked === true
//         })
//         setsubmitdata(checkdata)
//     }

//     const notcheckdata = () => {
//         setall(submitdata)
//         let uncheckdata = submitdata.filter((v) => {
//             return v.checked === false
//         })
//         setsubmitdata(uncheckdata)
//     }


//     return (
//         <div>
//             <div className="main_data">
//                 <div className="main_border">
//                     <div>
//                         <h1 className="text">{updatedata === true ? "Update" : "Enter"} Task</h1>
//                     </div>
//                     <div className="username">
//                         <input name="task" type="text" id="user" placeholder="Enter Your Task" value={formvalue.task} onChange={handlechange} />
//                         <input type="text" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} />

//                     </div>
//                     <div>
//                         <button className="sub" onClick={() => submit()}>Submit</button>
//                         <button className="sub" onClick={() => searchvalue()}>SEARCH</button>
//                         <button className="sub" onClick={() => alldata()}>ALL</button>
//                         <button className="sub" onClick={() => checkdata()}>Check Data</button>
//                         <button className="sub" onClick={() => notcheckdata()}>NotCheck Data</button>

//                     </div>
//                 </div>
//             </div>

//             <table border={1} align="center" cellSpacing={20} cellPadding={20} style={{ marginTop: " 30px", marginBottom: "30px" }} >
//                 {
//                     submitdata.map((item, index) => {
//                         return (
//                             <tr>
//                                 <td><input type="checkbox" checked={item.checked} name="datacheck" id="" onChange={() => check(index)}></input></td>
//                                 <td>{index + 1}</td>
//                                 <td id={index} style={{ textDecoration: item.checked === true ? 'line-through' : 'none' }}>{item.task}</td>
//                                 <td><button onClick={() => update(item, index)} disabled={item.checked === true}>Update</button></td>
//                                 <td><button onClick={() => deletedata(index)}>Delete</button></td>
//                             </tr>
//                         )
//                     })
//                 }
//             </table>
//         </div>
//     );
// }

// export default Form;

import React, { useState } from 'react'

function Form() {
    const [task, settask] = useState({
        Task: "",
        checked: false
    })

    const [submitdata, setsubmitdata] = useState([])
    const [updatedata, setupdatedata] = useState(false)
    const [indexdata, setindexdata] = useState("")
    const [searchdata, setsearchdata] = useState("")
    const [all, setall] = useState("")

    const valuechangehandler = (e) => {
        const { name, value } = e.target
        settask({ ...task, [name]: value })
    }

    const submithandler = () => {
        if (updatedata == true) {
            var data=submitdata
            data.splice(indexdata,1,task)
            setsubmitdata(data)
            setupdatedata(false)
        } else {
            submitdata.push(task)
            settask({
                Task: "",
                checked: false
            })
        }
    }

    const deletehandler = (index) => {
        var data = submitdata.filter((v, i) => {
            return i !== index
        })
        setsubmitdata(data)
    }

    const updatehandler = (item, index) => {
        setupdatedata(true)
        settask(item)
        setindexdata(index)
    }

    const search = () => {
        setall(submitdata)
        var searchname = submitdata.filter((v) => {
            return v.Task==searchdata
        })
        setsubmitdata(searchname)         
    }

    const allhandler = () => {
        setsubmitdata(all)
    }

    const checkhandler = (index) => {
        var checkbox = [...submitdata]
        if(checkbox[index].checked==true)
        {
            checkbox[index].checked=false
        }else{
            checkbox[index].checked=true
        }
        setsubmitdata(checkbox)
    }

    const completedata = () => {
        setall(submitdata)
        var complete = submitdata.filter((v,i) => {
            return v.checked == true
        })
        setsubmitdata(complete)
    }

    const Uncompletedata = () => {
        setall(submitdata)
        var uncomplete = submitdata.filter((v,i) => {
            return v.checked == false
        })
        setsubmitdata(uncomplete)
    }
    return (
        <>
            <input type="text" placeholder='Enter Your Task' onChange={valuechangehandler} name='Task' value={task.Task} />
            <input type="text" placeholder='Search Your Task' onChange={(e) => setsearchdata(e.target.value)} />
            <button onClick={() => submithandler()}>Submit</button>
            <button onClick={() => search()}>Search</button>
            <button onClick={() => allhandler()}>All</button>
            <button onClick={() => completedata()}>Complete</button>
            <button onClick={() => Uncompletedata()}>UnComplete</button>
            {
                submitdata.map((item, index) => {
                    return (
                        <>
                            <tr>
                                <td><input type="checkbox" name="" id="" onClick={() => checkhandler(index)} checked={item.checked} /></td>
                                <td>{index + 1}</td>
                                <td style={{textDecoration:item.checked==true?"line-through":"none"}} >{item.Task}</td>
                                <td><button onClick={() => deletehandler(index)}>Delete</button></td>
                                <td><button onClick={() => updatehandler(item, index)}>Update</button></td>
                            </tr>
                        </>
                    )
                })
            }

        </>
    )
}

export default Form