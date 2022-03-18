import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Particles from "react-tsparticles";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "./App.css";

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");
    App.models
      .predict(
        "1e8b65e4bde54434a7a6739087a10e1b",
        "https://samples.clarifai.com/face-det.jpb"
      )
      .then(
        function (response) {
          // do something with response
        },
        function (err) {
          // there was an error
        }
      );
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* {
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
