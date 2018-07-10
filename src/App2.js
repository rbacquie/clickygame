import React, { Component } from 'react';
import './App.css';
import Navbar from './componets/Navbar.js';
import Panel from './componets/Panel.js';
import Jumbotron from './componets/Jumbotron.js';

const currentScore = 0;
const currentSteak = 0;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        {
          url:"https://lumiere-a.akamaihd.net/v1/images/image_c562168a.jpeg?region=0,0,512,288&width=320&height=180",
          id: 1
        },
        {
          url:"https://cfvod.kaltura.com/p/1068292/sp/106829200/thumbnail/entry_id/0_vjp84ulc/version/100062/height/400/widt683h/",
          id: 2
        },
        {
          url:"https://www.cstatic-images.com/car-pictures/xl/USC70CHC021E021001.jpg",
          id:3
        },
        {
          url:"https://cms.kelleybluebookimages.com/content/dam/kbb-editorial/make/acura/nsx/2017/first-review/01-2017-acura-nsx.jpg",
          id:4
        },
        {
          url:"https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/03/senna.jpg?itok=eYNPMGjA&fc=50,50",
          id:5
        },
        {
          url:"https://media.wired.com/photos/59bafdf204afdc5248726f5c/master/w_2400,c_limit/BMW-TA.jpg",
          id:6
        },
        {
          url:"https://img.gaadicdn.com/images/mycar/large/ferrari/portofino/marketing/Ferrari-Portofino.jpg",
          id:7
        },
        {
          url:"https://www.caranddriver.com/images/15q1/654923/2016-mclaren-p14-supercar-25-cars-worth-waiting-for-feature-car-and-driver-photo-657582-s-original.jpg",
          id:8
        },
        {
          url:"https://i2.cdn.turner.com/money/dam/assets/180309103500-aston-martn-lagonda-concept-780x439.jpg",
          id:9
        },
        {
          url:"https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-Senna-car-price-new-2018-890981.jpg",
          id:10
        }
      ],
      lastIdPicked: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) { 
    console.log("we are clicked", id);
    console.log("Id last picked", this.state.lastIdPicked )
    if (id === this.state.lastIdPicked) {
      alert("You Picked it AGAIN!")
      this.setState({lastIdPicked:""});
      let currentScore = 0;
    } else {

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }

  return a;
}

console.log("shuffled array", shuffle(this.state.images));

this.setState({images:shuffle(this.state.images), lastIdPicked: id});
    }


  }
  render() {
    console.log("this is are state", this.state)
    const myStyles = {
      pictureStyle: {
        width: "215px",
        height: "215px",
        padding: "5px",
        radius: "2px"
      }
    }
    const self = this;
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Panel />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Clicky</h1>
        </header> */}
        {/* <button onClick={this.handleClick}></button> */}
        <p className="App-intro">
        
        </p>
        {this.state.images.map(function(singleDude){
          return(<img src={singleDude.url} alt={"images"} style={myStyles.pictureStyle} onClick = {() => {self.handleClick(singleDude.id)}}/>)
        })}


       {/* <img src={"https://cfvod.kaltura.com/p/1068292/sp/106829200/thumbnail/entry_id/0_vjp84ulc/version/100062/height/400/widt683h/"} /> */}
      </div>
    );
  }
}

export default App;
