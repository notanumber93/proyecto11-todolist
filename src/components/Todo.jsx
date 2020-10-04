import React, { useState } from 'react';
import { CloseCircleFilled } from '@ant-design/icons';

const Todo = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([{ value: "Walk dog" }])
    const handleList = (e) => {
        e.preventDefault()
        setList(
            [
                ...list,
                { value: task }
            ]
        )
    }
    const removeTask = (index) => {
        if (index >= 0) {
            const filterData = list.filter(item => item !== list[index]);
            setList(filterData);
        }
    }
    return (

        <div className="container notebook">
            
            <h1 className="title display-3">to do list</h1>
            <form action="" onSubmit={(e) => handleList(e)}>
                <input className="form-control input-group-lg" placeholder="New Task" onChange={e => setTask(e.target.value)} />
            </form>
            <div className="list">
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li 
                                    className="list-group-item d-flex justify-content-between align-items-center" 
                                     key={index} >
                                         {item.value} 
                                         <CloseCircleFilled  onClick={() => { removeTask(index) }} />
                                </li>

                            )
                        })
                    }
                    <div><small>
                    {list.length} &nbsp; Item left
                    </small></div>
                </ul>
                
            </div>

        </div>



    )

}

export default Todo