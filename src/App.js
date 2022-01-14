
import React, { Component } from 'react';
import Person from './Person';
import imgSrc from './photo.jpg';
import './App.css';
 class App extends Component {

   state = {
    fullName: '',
    bio: '',
    imgSrc: '',
    profession: '',
    shows: 'false',
   }
   change = () => {
    this.setState({
      fullName: 'lilia ansari',
      bio: 'maitrise',
      imgSrc: 'imgSrc',
      profession: 'PDG',
      shows: 'true',
    })
   }
  render() {
    return (
      <div className='App'>
        <Person />
        <button onClick={this.change} className='button'>show state</button>
        <img src={imgSrc}/>
        <p>{this.state.fullName}</p>
        <p>{this.state.bio}</p>
        <p>{this.state.profession}</p>

      </div>
    )
  }
}

export default App
