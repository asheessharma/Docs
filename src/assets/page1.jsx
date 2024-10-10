// import React from 'react'
// import {useState} from 'react'
// import './page1.css'

// export default function () {
//     const [name, setname] = useState("")
//     const [Age, setAge] = useState(0)
//     const [height, setheight] = useState(0)
//     const [power, setpower] = useState("")
//     const [display, setdisplay] = useState(false)
//     return (
//         <div>
//             <h1>Build a Hero</h1>
//             <div>
//                 <label>Name: </label>
//                 <input type='text' style={{ margin: 10 }} onChange={(event) => { setname(event.target.value) }} />
//                 <label>Age: </label>
//                 <input type='number' style={{ margin: 10 }} onChange={(event) => { setAge(event.target.value) }} />
//                 <label>Height: </label>
//                 <input type='number' style={{ margin: 10 }} onChange={(e) => { setheight(e.target.value) }} />
//                 <label>SuperPower: </label>
//                 <input type='text' style={{ margin: 10 }} onChange={(e) => { setpower(e.target.value) }} />
//             </div>
//             <button onClick={() => { setdisplay(true) }}>{display ? "Hide result" : "Display"}</button>
//             <div>
//                 <h1>Hero Info</h1>
                
//                 {display && (
//                     <ul>
//                         <li>Name: {name}</li>
//                         <li>Age: {Age}</li>
//                         <li>Height: {height}</li>
//                         <li>Power: {power}</li>
//                     </ul>
//                 )}
//             </div>
//         </div>
//     )
// }
