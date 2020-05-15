// Write your Character component here
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CharacterData = () => {
    const [character, setCharacter] = useState([])
    useEffect(()=>{
        axios
            .get("https://rickandmortyapi.com/api/character/1,2,40,70,87,123")
            .then(response =>{
                console.log(response.data)
                setCharacter(response.data)
            })
            .catch(error =>{
                console.log('testfailed', error)
            })
    },[])
    return <div className='test'/>
}

export default CharacterData;