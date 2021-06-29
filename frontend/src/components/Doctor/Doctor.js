
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import "./Doctor.css";


const Doctor = () => {
  const [Doctor, setDoctor] = useState()
  const [DoctorName, setRDoctorName] = useState()
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(99999999999999)
  const [filter, setfilter] = useState()
  

  const history = useHistory();

  
  useEffect(() => {
    axios.get(`http://localhost:5000/doctor`,{num1,num2})
      .then((response) => {
        setDoctor(response.data)
      }).catch((err) => {
        console.log("Error")
      })
  }, [])


  const callType_1 = () => {
    axios.post(`http://localhost:5000/doctors`,{num1,num2})
        .then((response) => {
     
         setfilter (response.data)
         setDoctor ([])
      }).catch((err) => {
        console.log("Error")
      })
  }
  
  
  const func = (id) => {
    return (history.push(`/doctor/${id}`)
    )
  }
 

  return (
    <>
         <div className="filter">

        <input onChange={(e)=>{setnum1(e.target.value); }}/>
        <input onChange={(e)=>{setnum2(e.target.value);}}/>
        <button onClick={callType_1}>Filter</button>
      </div>
              
             

      {filter && filter.map((elem, i) => {
                    return (<div className="childrestaurant" key={i}>
                        <div className="par">
              <h2>{elem.firstName} {elem.lastName}</h2>
              <h2>{elem.price}</h2>
              <p>{elem.description}</p>
              <button onClick={() => { func(elem.id) }}>more details</button>
             
            </div>
                    </div>)
                })}

      <div className="parantDoctor">
        {Doctor && Doctor.map((elem, i) => {
          return (<div className="childDoctor" key={i} >
              
             
            <div className="imag">
              <img src={`${elem.img}`} />
            </div>
            <div className="par">
              <h2>{elem.firstName} {elem.lastName}</h2>
              <h2>{elem.price}</h2>
              <p>{elem.description}</p>
              <button onClick={() => { func(elem.id) }}>more details</button>
             
            </div>

          </div>)
        })}
      </div>

    </>
  );
}
export default Doctor