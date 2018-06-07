import React, { Component } from 'react'

import Comment from './Comment'

class Comments extends Component {
    renderComment(key, comment){
        console.log(comment)
       return(
           <Comment key={key} comment={comment}/>
        )
    }
    render(){
        return(
            <div>
            Comentários:
                {Object.keys(this.props.comentarios).map(key => this.renderComment(key, this.props.comentarios[key]))}

            </div>
        )
    }
}

export default Comments