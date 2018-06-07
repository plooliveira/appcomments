import React, { Component } from 'react'

class NewComment extends Component {

    constructor(props){
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleEnter(e){
        
        if (e.keyCode === 13) {
            e.preventDefault()
            const textComment = this.refs.comment.value
            this.props.postNewComment({
                comment: textComment
            })
            this.refs.comment.value = ""
        }
    }
    render(){
        return(
            <div className="row">
                <textarea ref="comment" placeholder="Insira um comentário" className="form-control" onKeyDown={this.handleEnter}></textarea>
            </div>
        )
    }

}

export default NewComment