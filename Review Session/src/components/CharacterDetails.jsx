import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {
    const [character, setCharacter] = useState(null)

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
        .then((response)=>{
            setCharacter(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    if(character){
        return (
            <div>
                <h2>{character.name}</h2>
                <h3>Weapon: {character.weapon}</h3>
            </div>
          )
        
    }
    else{
        return(
            <h2>...Loading</h2>
        )
    }
}

export default CharacterDetails