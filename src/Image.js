import React, { Component } from 'react'

export default class Image extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        console.log("Image component mounted");
    }

    componentWillUnmount() {
        console.log("Image component unmounted");
    }

  render() {
    return (
      <div>
        <h1>Image Component</h1>
      </div>
    )
  }
}
