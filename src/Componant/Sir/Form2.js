import React,{useState} from 'react'

function Form2() {
    let [task, settask] = useState('')
    let [status, setstatus] = useState(false)
    let [id, setid] = useState()

    let [all, setall] = useState([])



    const btnhandler = () => {
        if (status == true) {
            var info = [...all]
            info[id] = task
            setall(info)
            setstatus(false)
        }
        else {
            setall([...all, task])
        }
    }

    const deletehandler = (ind) => {
        var data = all.filter((ele, ind1) => {
            return ind1 != ind
        })
        setall(data)
    }

    const edithandler = (ind) => {
        settask(all[ind])
        setstatus(true)
        setid(ind)
    }
    return (
        <div className="">
            <input type='text' value={task} onChange={(e) => { settask(e.target.value) }}></input>
            <input type='button' value={"ADD"} onClick={btnhandler}></input>
            <ul>
                <input type='text' placeholder='search'></input>
                <button>Completed Task</button>
                <button>unCompleted Task</button>
                <button>All</button>
                {
                    all.map((ele, ind) => {
                        return (
                            <>
                                <li>
                                    <input type='checkbox'></input>
                                    {ele}
                                    <button onClick={() => { deletehandler(ind) }}>Delete</button>
                                    <button onClick={() => { edithandler(ind) }}>Edit</button>
                                </li>
                            </>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Form2