import React, { Component } from 'react'
import { Hero, Vault, Battlefy, ParallaxFx } from './components'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxFx />
        <div
          css={`
            position: relative;
            z-index: 10;
            max-width: 100%;
            overflow: hidden;
          `}>
          {/* <Hero /> */}
          <Vault />
          {/* <Battlefy /> */}
        </div>
      </div>
    )
  }
}

export default App
