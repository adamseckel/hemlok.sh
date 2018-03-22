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
  { x: -40, s: 0.8, o: 0.8 },
  { x: -60, s: 0.6, o: 0.6 },
]
const outSlideStyles = { x: 100, s: 2, o: 0 }

export default function(props) {
  return (
    <Layout size="large">
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
                vault.
              </Text>
              <Divider />
              <Text pt>
                a material design inspiried item manager for the Destiny api.
              </Text>
              <Link
                css={`
                  margin-top: ${styleguide.spacing.sm};
                `}
                href="https://vault.crucible.gg">
                vault.crucible.gg
              </Link>
              <Divider />
              <Text
                pt
                css={`
                  opacity: ${activeSlideIndex === 0 ? 1 : 0.2};
                  margin-bottom: ${styleguide.spacing.sm};
                `}>
                vault allows players to move items between characters in game, a
                feature not supported by the actual game client.
              </Text>
              <Text
                pt
                css={`
                  opacity: ${activeSlideIndex === 1 ? 1 : 0.2};
                  margin-bottom: ${styleguide.spacing.sm};
                `}>
                vault uses react-motion and a home-baked drag and drop library
                to create a native experience
              </Text>
              <Text
                pt
                css={`
                  opacity: ${activeSlideIndex === 2 ? 1 : 0.2};
                  margin-bottom: ${styleguide.spacing.medium};
                `}>
                vault emulates the in game experience where you’d expect it, and
                offers improvements where they’re welcome
              </Text>
            </Column>
            <Column
              css={`
                height: 600px;
                left: 0;
              `}>
              <div
                css={`
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  right: 0;
                  left: 80px;
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
                        margin-left: 40px;
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
