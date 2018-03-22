import { Component } from 'react'

function incrementSlide(currentSlide, numSlides) {
  return currentSlide + 1 <= numSlides ? currentSlide + 1 : 0
}

class Carousel extends Component {
  timer = undefined
  constructor() {
    super()
    this.state = {
      activeSlideIndex: 0,
    }

    this.timer = setInterval(() => {
      this.onGoToSlide(
        incrementSlide(this.state.activeSlideIndex, this.props.numSlides)
      )
    }, 4000)

    this.onGoToSlide = this.onGoToSlide.bind(this)
  }

  onGoToSlide(index) {
    this.setState({
      activeSlideIndex: index,
    })
    clearInterval(this.timer)

    this.timer = setInterval(() => {
      this.onGoToSlide(
        incrementSlide(this.state.activeSlideIndex, this.props.numSlides)
      )
    }, 10000)
  }

  render() {
    return this.props.children({
      activeSlideIndex: this.state.activeSlideIndex,
      onGoToSlide: this.onGoToSlide,
    })
  }
}

export default Carousel
