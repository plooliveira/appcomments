import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {

  state = {
     comments: {
     },
     isLoggedIn: false,
     user: {}
   }

  componentDidMount(){

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user) => {
      
      if (user){
        this.setState({isLoggedIn: true, user})
      } else {
        this.setState({isLoggedIn: false, user: {}})
      }
      
    })

  }

  postNewComment = (comment) => {

    comment.user = {
      name: this.state.user.displayName
    }

    const comments = {...this.state.comments}
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState(
      {
        comments: comments
      }
    )
  }

  auth(provider){
    
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }
  
  render() {
    return (

      <div className="container">
          { this.state.isLoggedIn && 
            <div> <p>{this.state.user.displayName}</p>
            <img alt={this.state.user.displayName} src={this.state.user.photoURL}/>
            <button onClick={() => this.props.auth.signOut()}>Deslogar</button>
            <NewComment postNewComment={this.postNewComment}/> 
            </div>
          }
          { !this.state.isLoggedIn && 
              <div className='alert alert-info'>
              <button onClick={() => this.auth('facebook')}>Entre com Facebook para comentar</button></div> 
          }
          <Comments comentarios={this.state.comments}/>
          
      </div>
      
    )
  }
}

export default App
