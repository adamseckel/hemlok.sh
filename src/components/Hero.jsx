import * as React from 'react'
import { css, cx } from 'react-emotion'
import { Layout, Text, Row, Column, Link, styleguide } from './styleguide'

const mb = css`
  margin-bottom: 40px;
`
const hiddenMobile = css`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

export default function(props) {
  return (
    <Layout size="hero">
      <Row align="start">
        <Column
          align="start"
          justify="space-between"
          css={`
            background-color: ${styleguide.colors.background};
            padding: ${styleguide.spacing.lg};
            min-height: 60vh;
            width: auto;
            max-width: 700px;
          `}>
          <Text
            hero
            serif
            bold
            className="text-color"
            css={`
              white-space: no-wrap;
              line-height: 100%;
              ${mb};
            `}>
            Hey, <br />
            I’m Adam.
          </Text>
          <Text title className={cx(mb, 'text-color')}>
            I am a product and design-systems focused web engineer and designer.
          </Text>
          <Row justify="space-between">
            <Link
              title
              href="https://twitter.com/hemlok_"
              className="text-color">
              twitter
            </Link>
            <Link title href="https://github.com/hemlok" className="text-color">
              github
            </Link>
            <Link
              title
              href="mailto:adam.seckel+hemlok@gmail.com"
              className="text-color">
              email
            </Link>
          </Row>
        </Column>
        <Column grow className={hiddenMobile} />
      </Row>
    </Layout>
  )
}
