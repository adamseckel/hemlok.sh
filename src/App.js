import React, { Component } from 'react'
import { Hero, Vault, ParallaxFx } from './components'
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
          <Vault />
          <Vault />
          <Vault />
        </div>
      </div>
    )
  }
}

export default App
