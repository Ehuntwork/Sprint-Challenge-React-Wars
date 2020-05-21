import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Character from './CharacterCard'
import { Container, Row, Col } from 'reactstrap'

const CharcterList = () =>{

    const [charcters, setCharcters] = useState([])

    useEffect(()=>{
      axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5')

      .then(res => {
        setCharcters(res.data);
        console.log(res);
      })

      .catch(err=>(console.log(err, 'WRONG')))
    },[])

    return (
    <Container>
        <Row xs='3'>
            {charcters.map(charcter =>(
                <Character charcter={charcter}/>
            ))}
        </Row>
    </Container>);
}

export default CharcterList;