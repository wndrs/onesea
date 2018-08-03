import React, { Component } from 'react';
import './App.css';
import photo1 from "./image/photo1.jpg"
import photo2 from "./image/photo2.jpg"
import photo3 from "./image/photo3.jpg"
import photo4 from "./image/photo4.jpg"
import photo5 from "./image/photo5.jpg"
import logo from "./image/logo.png"

class App extends Component {
  constructor() {
    super();
    this.state = {
     speed: 3000,
    }
  }
  componentWillMount() {
    this.changetoimage1()
  }
  changetoimage1 =() => {
    this.setState({photo : photo1})
    setTimeout(this.changetoimage2, this.state.speed)  
}
changetoimage2 =() => {
  this.setState({photo : photo2})
    setTimeout(this.changetoimage3, this.state.speed)  
}
changetoimage3 =() => {
  this.setState({photo : photo3})
    setTimeout(this.changetoimage4, this.state.speed)  
}
changetoimage4 =() => {
  this.setState({photo : photo4})
    setTimeout(this.changetoimage5, this.state.speed)  
}
changetoimage5 =() => {
  this.setState({photo : photo5})
    setTimeout(this.changetoimage1, this.state.speed)  
}

handleClick = () => {
  this.setState({logoOff:true})
}
handleClickoff = () => {
  this.setState({logoOff:false,})       

}
  render() {
    return (

<div >
       {!this.state.logoOff && <img src={logo} className="logo" onClick={this.handleClick} />}
       {this.state.logoOff && <div className="flex">
       <div className="popUp" onClick={this.handleClickoff}>Sustainable swimwear <br/>
                Made from regenerated ocean plastic waste. <br/>
                ~ For the love of the sea ~<br/>
                Soon available for pre-orders. <br/>
                Get in touch  </div></div>}
      <img src={this.state.photo} className="photo" />
      </div>
  
    );
  }
}

export default App;
