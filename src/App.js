import React, { Component } from 'react';
import './App.css';
import photo1 from "./image/photo1.jpg"
import photo2 from "./image/photo2.jpg"
import photo3 from "./image/photo3.jpg"
import photo4 from "./image/photo4.jpg"
import photo5 from "./image/photo5.jpg"
import HoverImage from "react-hover-image"
import logo from "./image/logo.png"
import logoblack from "./image/logoblack.png"
import * as firebase from "firebase"
import config from "./config"


class App extends Component {
  constructor() {
    super();

    this.state = {
      speed: 3000,
      value: ''

    }

    firebase.initializeApp(config)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

  }

  componentWillMount() {
    this.changetoimage1()
  }


  changetoimage1 = () => {
    this.setState({ photo: photo1 })
    setTimeout(this.changetoimage2, this.state.speed)
  }
  changetoimage2 = () => {
    this.setState({ photo: photo2 })
    setTimeout(this.changetoimage3, this.state.speed)

  }
  changetoimage3 = () => {
    this.setState({ photo: photo3 })
    setTimeout(this.changetoimage4, this.state.speed)
  }
  changetoimage4 = () => {
    this.setState({ photo: photo4 })
    setTimeout(this.changetoimage5, this.state.speed)
  }
  changetoimage5 = () => {
    this.setState({ photo: photo5 })
    setTimeout(this.changetoimage1, this.state.speed)
  }

  handleClick = () => {
    this.setState({ logoOff: true })
  }
  handleClickoff = () => {

    if (this.state.logoOff === true) {
      this.setState({
        logoOff: false,
        touch: false,
        messageOn: false
      })
    }

  }
  getTouch = () => {


    this.setState({ touch: true, })

  }

  handleChange(event) {

   
 
    this.setState({ email: event.target.value });


  }
  handleChange2(e) {
    this.setState({ message: e.target.value,
    
     });
    


  }
  handleSubmit(event) {

    var clean = this.state.email.replace(".", '')
    var clean1 = clean.replace(".", '')
    var clean2 = clean1.replace(".", '')
    var clean3 = clean2.replace(".", '')
    var clean4 = clean3.replace(".", '')
    var clean5 = clean4.replace(".", '')
    var clean6 = clean5.replace(".", '')
    var clean7 = clean6.replace(".", '')
    var clean8 = clean7.replace(".", '')
    

    var database = firebase.database()
    database.ref('email list/' +  clean8  ).set({
      "email": this.state.email
    })
  
    if (this.state.messageOn === true) {
      database.ref('message list/' + clean8 + '/messages/' + this.state.random).set({
        "email": this.state.email,
        "message": this.state.message
      })
    }


    this.handleClickoff()
    event.preventDefault();
  }

  leaveMess = () => {


    this.setState({ messageOn: true,
    random: Math.floor(Math.random() * 1000000) + 2})

  }




  render() {
    return (

      <div >
        {!this.state.logoOff && <div className="logo" onClick={this.handleClick}>

          <HoverImage
            src={logo}
            hoverSrc={logoblack}
            style={{ width: 650 }}

          />
        </div>


        }
        {this.state.logoOff && <div className="flex">
          {!this.state.touch && <div className="popUp">Sustainable swimwear <br />
            Made from regenerated ocean plastic waste. <br />
            ~ For the love of the sea ~<br />
            Soon available for pre-orders. <br />
            <a className="classdutexte" onClick={this.getTouch}>Get in touch</a>  </div>}

          {this.state.touch && <div className="popUp2">
            Get news when the first collection is out<br />
            Get 15% discount
            <form onSubmit={this.handleSubmit}>

              <input
                onChange={this.handleChange}
                placeholder="email"
                type="texte"
              />


              {this.state.messageOn && <div >
                <input
                  onChange={this.handleChange2}
                  placeholder="message"
                  type="texte"

                />
              </div>}
              <div className="btn-group">

                <input type="submit" value="Submit" />
              </div>
            </form>
            {!this.state.messageOn && <a className="classdutexte" onClick={this.leaveMess}>leave a message</a>}


          </div>}


        </div>}

        <img src={this.state.photo} className="photo" onClick={this.handleClickoff} />
      </div>

    );
  }
}

export default App;
