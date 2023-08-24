import React from 'react'
import axios from 'axios'

const Paybutton = () => {
    const handleCheckOut = () => {
        axios.post("http://localhost:2000/api/stripe/create-checkout-session",{
            userId:1
        })
        .then((result) => {
           if(result.data.url){
            window.location.url = result.data.url
           } 
        }).catch((err) => {
            console.log(err.message)
        });
    }
  return (
    <div>
        <button onClick={handleCheckOut}>Pay</button>
    </div>
  )
}

export default Paybutton