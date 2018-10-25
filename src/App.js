import React, { Component } from 'react';
import './App.css';
import photo1 from "./image/photo1.jpg"
import photo2 from "./image/photo2.jpg"
import photo3 from "./image/photo3.jpg"
import photo4 from "./image/photo4.jpg"
import photo5 from "./image/photo5.jpg"
import photo6 from "./image/photo6.jpg"
import photo7 from "./image/photo7.jpg"
import photo9 from "./image/photo9.jpg"
import photo22 from "./image/photo22.jpg"
import photo11 from "./image/photo11.jpg"
import photo12 from "./image/photo12.jpg"
import photo19 from "./image/photo19.jpg"
import logo from "./image/Bleu.png"
import config from "./config"
import * as firebase from "firebase"



class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ''

    }

    firebase.initializeApp(config)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  componentDidMount() {
    setTimeout(this.popUp, 5000)
  }

  popUp = () => {
    this.setState({ popUp: true })

  }

  closePopUp = () => {
    this.setState({ popUp: false })

  }


  handleChange(event) {



    this.setState({ email: event.target.value });


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
    database.ref('email list/' + clean8).set({
      "email": this.state.email
    })


    this.closePopUp()

  }






  render() {
    return (

      <div>
        {this.state.popUp && <div className="flex">
          <div className="popUp">       COMING SOON! <br />
            Sustainable swimsuits for her. <br />
            Timeless, elegant & functional designs <br />
            made of high end recycled fabrics. <br />
            Join our community to be the first to know <br />
            about pre orders launch & all the good stuff. <br />
            <form onSubmit={this.handleSubmit}>

              <input
                onChange={this.handleChange}
                placeholder="email"
                type="texte"
              />


              <div className="btn-group">

                <input type="submit" value="Submit" />
              </div>
            </form>


            <div onClick={this.closePopUp} className="exit">x </div>
          </div>






        </div>}




        <div className="logoBgr" >
          <div  className="logoHover" onClick={this.popUp}>
            <img src={logo}  className="imageLogo" alt="" />

          </div>
        </div>
        <section className="gallery">
          <div className="container">
            <div className="grid">
              <div className="column-xs-8 column-md-8">


                <figure className="img-container">
                  <img src={photo22} alt="" />
                </figure>

              </div>

              <div className="column-xs-4 column-md-4">


                <figure className="img-container">
                  <img src={photo12} alt="" />
                </figure>

              </div>


              <div className="column-xs-4 column-md-4">
                <figure className="img-container">
                  <img src={photo2} alt="" />

                </figure>
              </div>
              <div className="column-xs-8 column-md-8">
                <figure className="img-container">
                  <img src={photo3} alt="" />

                </figure>
              </div>
              <div className="column-xs-6 column-md-6">
                <figure className="img-container">
                  <img src={photo4} alt="" />


                </figure>
              </div>
              <div className="column-xs-6 column-md-6">
                <figure className="img-container">
                  <img src={photo5} alt="" />

                </figure>
              </div>
              <div className="column-xs-12">
                <figure className="img-container">
                  <img src={photo6} alt="" />

                </figure>
              </div>
              <div className="column-xs-6 column-md-6">
                <figure className="img-container">
                  <img src={photo7} alt="" />


                </figure>
              </div>
              <div className="column-xs-6 column-md-6">
                <figure className="img-container">
                  <img src={photo9} alt="" />

                </figure>
              </div>

              <div className="column-xs-12 ">
                <figure className="img-container">
                  <img src={photo11} alt="" />

                </figure>
              </div>


              <div className="column-xs-4 column-md-4">
                <figure className="img-container">
                  <img src={photo1} alt="" />


                </figure>
              </div>
              <div className="column-xs-8 column-md-8">
                <figure className="img-container">
                  <img src={photo19} alt="" />

                </figure>
              </div>



            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
