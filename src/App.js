import React, { Component } from 'react'
import { Hero, ParallaxFx } from './components'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxFx />
        <div
          css={`
            position: relative;
            z-index: 4;
          `}>
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
        </div>
      </div>
    )
  }
}

export default App
