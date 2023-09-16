import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Characters() {
    const [characters, setcharacters] = useState([])

    useEffect(()=>{
        axios.get('https://ih-crud-api.herokuapp.com/characters')
        .then((response)=>{
            setcharacters(response.data)
        })
    },[])
  return (
    <div>
        {characters.map((oneCharacter)=>{
            return(
                <div>
                    <h1>{oneCharacter.name}</h1>
                    <Link to={`/characters/${oneCharacter.id}`}>see details</Link>
                </div>
            )
        })}
    </div>
  )
}

export default Characters