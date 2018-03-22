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

import Carousel from './Carousel'
const slideStyles = [
  { x: 0, s: 1, o: 1 },
  { x: -35, s: 0.8, o: 0.4 },
  { x: -62, s: 0.6, o: 0.3 },
]
const outSlideStyles = { x: 100, s: 2, o: 0 }

export default function(props) {
  return (
    <Layout size="hero">
      <Carousel numSlides={2}>
        {({ activeSlideIndex, onGoToSlide }) => (
          <Row align="stretch" justify="stretch">
            <Column
              align="start"
              css={`
                max-width: 30%;
              `}>
              <Text
                title
                css={`
                  white-space: no-wrap;
                  line-height: 100%;
                `}>
                battlefy.
              </Text>
              <Divider />
              <Text pt>
                a new player and community centric on-demand competition mode
              </Text>
              <Link
                css={`
                  margin-top: ${styleguide.spacing.sm};
                `}
                href="https://battlefy.com">
                battlefy.com
              </Link>
              <Divider />
              <Text
                pt
                onClick={() => onGoToSlide(0)}
                css={`
                  opacity: ${activeSlideIndex === 0 ? 1 : 0.2};
                  margin-bottom: ${styleguide.spacing.sm};
                `}>
                lightning tournaments allow league of legends players to group
                up in a chat room, and queue up for on demand match-making and
                tournaments
              </Text>
              <Text
                pt
                onClick={() => onGoToSlide(1)}
                css={`
                  opacity: ${activeSlideIndex === 1 ? 1 : 0.2};
                  margin-bottom: ${styleguide.spacing.sm};
                `}>
                lightning tournaments rewards repeat player play, granting
                rewards for leveling up
              </Text>
              <Text
                pt
                onClick={() => onGoToSlide(2)}
                css={`
                  opacity: ${activeSlideIndex === 2 ? 1 : 0.2};
                  margin-bottom: ${styleguide.spacing.medium};
                `}>
                lightning tournaments uses the league of legends api to detect
                player ranks, confirm all players are present, and record the
                game score in real time.
              </Text>
            </Column>
            <Column
              css={`
                height: 600px;
                margin-left: 120px;
              `}>
              <div
                css={`
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  right: 0;
                  left: 0;
                  z-index: 10;
                `}>
                {[0, 1, 2].map(index => {
                  const style = slideStyles[activeSlideIndex - index]
                  const activeStyle = style ? style : outSlideStyles
                  return (
                    <Column
                      key={index}
                      css={`
                        height: 100%;
                        position: absolute !important;
                        left: 0;
                        opacity: ${index > activeSlideIndex
                          ? 0
                          : activeStyle.o};
                        transform: translate3d(${activeStyle.x}px, 0, 0)
                          scale3d(${activeStyle.s}, ${activeStyle.s}, 1);
                        z-index: ${10 + index};
                        transform-origin: left;
                        transition: all 500ms ease;
                        background-color: ${styleguide.colors.foreground};
                        border-radius: ${styleguide.radii.outer};
                        overflow: hidden;
                        padding: 80px;
                        ${styleguide.shadows.button};
                      `}>
                      <Text
                        subtitle
                        subtext
                        bold
                        serif
                        css={`
                          line-height: 150%;
                        `}>
                        “ I need to redesign the article card, but I don’t know
                        what parts of the card UI catch a users eye…
                      </Text>
                      <Text
                        secondary
                        small
                        css={`
                          margin-top: 40px;
                        `}>
                        - Product Manager Joe
                      </Text>
                    </Column>
                  )
                })}
              </div>
            </Column>
          </Row>
        )}
      </Carousel>
    </Layout>
  )
}
