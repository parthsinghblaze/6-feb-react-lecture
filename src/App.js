import { Component } from "react";
import Image from "./Image";

class App extends Component {

  constructor() {
    super()

    this.state = {
      number: 0,
      isShowing: false
    }

  }

  componentDidMount() {
    console.log('App component mounted');
  }

  componentDidUpdate() {
    console.log("App component has been updated");
  }
  
  render () {
    return <div className="container">
      <h1> {this.state.number} </h1>
      <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
      <button onClick={() => this.setState({ number: this.state.number - 1 })}>-</button>
      <button onClick={() => this.setState({ isShowing: !this.state.isShowing })}>Hide/Show</button>
      {
        this.state.isShowing ? <Image /> : null 
      }
    </div>
  }
}

export default App;