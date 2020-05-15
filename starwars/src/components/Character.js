// Write your Character component here
import React from 'react';

const Character = props => {
   
    return <div className='Container'>
        <div className ='name'>
            <h2>props.name</h2>
        </div>
    </div>
}

export default Character;