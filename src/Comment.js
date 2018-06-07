import React from 'react'
//Componente stateless


const Comment = props => 
    <p className="card">{props.comment.comment} <br />
    <b>por: {props.comment.user.name} </b>
    </p>
    


    
export default Comment