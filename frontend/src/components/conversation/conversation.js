import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";



const  Conversation = ({sender,receiver}) => {
    return (
        <div>
            
        </div>
    )
}




// const Conversation = ({sender,receiver}) => {
//     console.log("s and r from front",sender,receiver);
//   // const [socket, setSocket] = useState(null)
//   const socket = useRef(io("ws://localhost:5000"));
//   const userId = localStorage.getItem("user_id");
//   const [result, setResult] = useState([]);
//   const [message, setMessage] = useState("");
//   const [arrivalMessage, setArrivalMessage] = useState([])
// console.log("result in con",result);
//   useEffect(() => {
//     socket.current = io("ws://localhost:5000");
//     socket.current.on("getMessage",data=>{
//       setArrivalMessage([...arrivalMessage,{
//         sender: data.userId,
//         text:data.text,
//         createdAt:Date.now()
//       }])
//     })
//   },[]);
  

//   useEffect(() => {
//     axios
//       .post(`http://localhost:5000/conversation/con`, { sender, receiver })
//       .then((result) => {
//         setResult(result.data);
//         console.log(result.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   useEffect(() => {
//     socket.current.emit("addUser", userId);
//     socket.current.on("getUsers", (users) => {
//       console.log(users);
//     });
//   }, [userId]);


//   //  socket.current.on('message', ({text}) =>{
//   //    setResult([...result, text]);
//   //  })

//   const handleMessage = (e) =>{
//     socket.current.emit("sendMessage", {
//       userId,
//       receiverId:receiver,
//       text: message,
//     });
//   }
//   console.log('arrival messages', arrivalMessage)
//   return (
//     <div>
//         <div>
//             {result}
//         </div>
//       <div>
//         {arrivalMessage ? arrivalMessage.map((results) => <p>{results.text}</p>) : <></>}
//       </div>
//       <input
//         placeholder="write a message here"
//         onChange={(e) => {
//           setMessage(e.target.value);
//         }}
//       />
//       <button onClick={handleMessage}>send</button>
//     </div>
//   );
// };

export default Conversation;
