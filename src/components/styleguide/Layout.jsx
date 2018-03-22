import styled from 'react-emotion'

import * as React from 'react'
import { Column } from './Box'
import { colors, layouts } from './styleguide'

const sizeMap = {
  hero: '100vh',
  large: '80vh',
  medium: '60vh',
  small: '20vh',
}
const minSizeMap = {
  large: '800px',
  medium: '600px',
  small: '200px',
}

const Section = styled(Column)`
  height: ${props => sizeMap[props.size] || '80vh'};
  min-height: ${props => minSizeMap[props.size] || '800px'};
  position: relative;
  ${layouts.content};
`

const Background = styled.div`
  width: 100%;
  overflow: hidden;
`

export default ({ children, size, black, gray, align, justify }) => {
  return (
    <Background>
      <Section size={size} align={align} justify={justify}>
        {children}
      </Section>
    </Background>
  )
}
