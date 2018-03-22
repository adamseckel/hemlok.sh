import React, { Component } from 'react'
import { Vault, Battlefy, ParallaxFx } from './components'
import {
  Divider,
  Row,
  Column,
  styleguide,
  Text,
  Link,
} from './components/styleguide'
import styled from 'react-emotion'
const StyledLink = styled(Link)`
  margin-left: ${styleguide.spacing.md};
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row
          css={`
            position: fixed;
            top: 0;
            background-color: ${styleguide.colors.background};
            z-index: 20;

            left: 0;
            right: 0;
          `}>
          <Column
            align="start"
            css={`
              ${styleguide.layouts.content};
              padding: 10px 40px;
              padding-bottom: 0;
            `}>
            <Row>
              <Text pt> hemlok </Text>
              <Row justify="end">
                <StyledLink pt light small href="https://twitter.com/hemlok_">
                  twitter
                </StyledLink>
                <StyledLink
                  pt
                  light
                  small
                  href="https://www.linkedin.com/in/aseckel/">
                  linkedin
                </StyledLink>
                <StyledLink pt light small href="https://github.com/hemlok">
                  github
                </StyledLink>
              </Row>
            </Row>

            <Divider
              inline
              css={`
                margin-top: 10px;
                opacity: 0.2;
              `}
            />
          </Column>
        </Row>
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
          <Divider
            contentWide
            css={`
              opacity: 0.1;
            `}
          />
          <Battlefy />
        </div>
      </div>
    )
  }
}

export default App
