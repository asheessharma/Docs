// import { useState, useRef } from 'react';
// import "./todo.css";

// export default function () {
//     const [todoList, setTodoList] = useState([])
//     const [currentState, setCurrentState] = useState("");

//     const inputTask = useRef(null)


//     const addTask = () => {
//         setTodoList([...todoList, { task: currentState, completed: false }]);
//         inputTask.current.value = "";
//         setCurrentState("");
//     }
//     const deleteTask = (taskTodelete) => {
//         setTodoList(todoList.filter((task) => {
//             return task.task != taskTodelete;
//         }))
//     }
//     const completetask = (taskTocomplete) => {
//         setTodoList(todoList.map((task) => {
//             return task.task == taskTocomplete
//                 ? { task: taskTocomplete, completed: true }
//                 : { task: task.task, completed: task.completed ? true : false };
//         }))
//     }

//     return (
//         <div className="app">
//             <h1>TODO LIST</h1>
//             <div>
//                 <input
//                     ref={inputTask}
//                     type="text"
//                     placeholder='Typing...'
//                     onKeyDown={(event)=>{if(event.keyCode==13)addTask();}}
//                     onChange={(e) => {
//                         setCurrentState(e.target.value);
//                     }} />
//                 <button onClick={addTask}>Add task</button>
//             </div>
//             <hr />
//             <ul>
//                 {todoList.map((val, key) => {
//                     return (
//                         <div id="task">
//                             <li key={key}>{val.task}</li>
//                             <button onClick={() => completetask(val.task)}>Completed</button>
//                             <button onClick={() => deleteTask(val.task)}>X</button>
//                             {val.completed ? <h1>Task completed</h1> : <h1>Task Not completed</h1>}
//                         </div>
//                     );
//                 })}
//             </ul>
//         </div>

//     )
// }
