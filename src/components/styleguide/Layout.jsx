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

const Section = styled(Column)`
  height: ${props => sizeMap[props.size] || '80vh'};
  min-height: 650px;
  position: relative;
  ${layouts.content};
`

const Background = styled.div`
  width: 100%;
  background-color: ${props =>
    props.white ? colors.foreground : 'transparent'};
`

export default ({ children, size, white, black, gray, align, justify }) => {
  return (
    <Background white={white}>
      <Section size={size} align={align} justify={justify}>
        {children}
      </Section>
    </Background>
  )
}
