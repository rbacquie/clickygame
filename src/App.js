import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column.js";
import cars from "./cars.json";
import "./App.css";

// function to shuffle the array
function shuffleCars(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //sets the App class and the state object keys
  class App extends Component {
    // Set this.state
    state = {
      cars,
      currentScore: 0,
      topScore: 0,
      result: "",
      clicked: [],
    };

    // this function handles the click event
    handleClick = id => {
        //if the id is not selected  run the functions
        if (this.state.clicked.indexOf(id) === -1) {
          this.handleIncrement();
          this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            // this will run the reset function
          this.handleReset();
        }
      };

      // this function handles addition to the score and checks to see it all 12 pictures have been selected
      handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
          currentScore: newScore,
          result: ""
        });
        if (newScore >= this.state.topScore) {
          this.setState({ topScore: newScore });
        }
        else if (newScore === 12) {
          this.setState({ result: "You Got Them All!" });
        }
        this.handleShuffle();
      };

      // resets the score and lets player know to try again
      handleReset = () => {
        this.setState({
          currentScore: 0,
          topScore: this.state.topScore,
          result: "Try Try Again!",
          clicked: []
        });
        this.handleShuffle();
      };

      // this set the shuffle funtion 
      handleShuffle = () => {
        let shuffledCars = shuffleCars(cars);
        this.setState({ cars: shuffledCars });
      };

      // this is the render function to the screen
      render() {
        return (
          <Wrapper>
            <Nav
              title="Fancy Car Clicky Game"
              score={this.state.currentScore}
              topScore={this.state.topScore}
              rightWrong={this.state.rightWrong}
            />
    
            <Title>
              Try to click on each Fancy Car, but don't click on the same car twice, or
              we'll release the Repo Man!
            </Title>
    
            <Container>
              <Row>
                {this.state.cars.map(car => (
                  <Column size="md-3 sm-6">
                    <CarCard
                      key={car.id}
                      handleClick={this.handleClick}
                      handleIncrement={this.handleIncrement}
                      handleReset={this.handleReset}
                      handleShuffle={this.handleShuffle}
                      id={car.id}
                      image={car.image}
                    />
                  </Column>
                ))}
              </Row>
            </Container>
          </Wrapper>
        );
      }
    }
    


  export default App;