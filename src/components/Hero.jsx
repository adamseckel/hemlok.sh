import * as React from 'react'
import styled from 'react-emotion'
import {
  Layout,
  Text,
  Divider,
  Row,
  Column,
  Link,
  styleguide,
} from './styleguide'
const StyledLink = styled(Link)`
  margin-right: ${styleguide.spacing.md};
`
export default function(props) {
  return (
    <Layout size="medium">
      <Row align="start">
        <Column
          align="start"
          css={`
            width: auto;
          `}>
          <Text
            hero
            css={`
              white-space: no-wrap;
              line-height: 100%;
            `}>
            hemlok.sh
          </Text>
          <Divider />
          <Text pt>
            I’m Adam Seckel, a Canadian product designer and developer living in
            London, UK.
          </Text>
          <Divider />
          <Row justify="start">
            <StyledLink pt light>
              twitter
            </StyledLink>
            <StyledLink pt light>
              linkedin
            </StyledLink>
            <StyledLink pt light>
              github
            </StyledLink>
          </Row>
        </Column>
        <Column grow />
      </Row>
    </Layout>
  )
}
