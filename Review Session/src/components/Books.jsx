import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link, Navigate} from 'react-router-dom'

function Books(props) {
    const [isLoggedIn,setIsLoggedIn] = useState(true)


    
    console.log(props)

    if(isLoggedIn){
  return (
    <div>
        {props.books.map((oneBook)=>{
            return(
                <div key={oneBook.id}>
                    <h1>{oneBook.title}</h1>
                    <h4>Author: {oneBook.author}</h4>
                    <Link to={`/books/${oneBook.id}`}>Go To Book Details</Link>
                </div>
            )
        })}
    </div>
  )}
  else{
    return(
        // If the user is NOt logged in we are redirected to the /login route
        <Navigate to='/login'></Navigate>
    )
  }
}

export default Books