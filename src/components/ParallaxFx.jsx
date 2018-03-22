import React, { Component } from 'react'
import styled from 'react-emotion'
import { styleguide } from './styleguide'
// import basicScroll from 'basicscroll'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 1;
`

const fxSizeMap = {
  xs: '10px',
  sm: '20px',
  md: '60px',
  lg: '140px',
}

const FX = styled.div`
  border-radius: ${styleguide.radii.circle};
  width: ${props => fxSizeMap[props.size]};
  height: ${props => fxSizeMap[props.size]};
  background-color: ${props =>
    props.primary ? styleguide.colors.primary : styleguide.colors.foreground};
  opacity: ${props => (props.fade ? props.fade / 10 : 1)};
  z-index: ${props => (props.primary ? 1 : 2)};
  position: absolute;
  right: ${props => props.x}%;
  top: ${props => props.y}%;
`

const fx = [
  {
    size: 'lg',
    fade: 3,
    x: 20,
    y: 60,
  },
  {
    size: 'sm',
    x: 20,
    y: 62,
    primary: true,
  },
  {
    size: 'md',
    fade: 1,
    x: 65,
    y: 85,
  },
  {
    size: 'sm',
    fade: 6,
    x: 90,
    y: 60,
  },
  {
    size: 'sm',
    fade: 4,
    x: 40,
    y: 20,
  },
  {
    size: 'xs',
    fade: 2,
    x: 70,
    y: 15,
    primary: true,
  },
  {
    size: 'sm',
    fade: 7,
    x: 40.4,
    y: 20.4,
  },
  {
    size: 'xs',
    fade: 2,
    x: 15,
    y: 20,
  },
]

function mapFx(offset) {
  return fx.map((effect, i) => (
    <FX
      className={
        Math.random() > 0.5
          ? 'foreground'
          : Math.random() > 0.5 ? 'midground' : 'background'
      }
      key={i}
      id={`effect-${i}`}
      {...effect}
    />
  ))
}

class ParallaxFx extends Component {
  timer = undefined
  constructor() {
    super()
    this.state = {
      activeSlideIndex: 0,
    }
  }

  componentDidMount() {
    const basicScroll = window.basicScroll
    const fg = basicScroll.create({
      elem: document.querySelector('.App'),
      from: 'top-top',
      to: 'bottom-bottom',
      props: {
        '--foregroundY': {
          from: '-40px',
          to: '40px',
        },
      },
    })

    fg.start()
    const mg = basicScroll.create({
      elem: document.querySelector('.App'),
      from: 'top-top',
      to: 'bottom-bottom',
      props: {
        '--midgroundY': {
          from: '-10px',
          to: '10px',
        },
      },
    })

    mg.start()

    const bg = basicScroll.create({
      elem: document.querySelector('.App'),
      from: 'top-top',
      to: 'bottom-bottom',
      props: {
        '--backgroundY': {
          from: '-5px',
          to: '5px',
        },
      },
    })

    bg.start()
  }

  render() {
    return <Backdrop>{mapFx(this.state.offset)}</Backdrop>
  }
}

export default ParallaxFx
