import styled from 'react-emotion'
import { colors, text } from './styleguide'

const Text = styled.p`
  color: ${props =>
    props.primary
      ? colors.primary
      : props.secondary
        ? colors.secondary
        : props.subtext
          ? colors.subtext
          : props.white ? colors.background : colors.text};
  font-size: 1rem;
  font-family: ${props =>
    props.pt
      ? '"futura-pt", Futura, Helvetica, Arial, sans-serif'
      : props.serif
        ? 'Georgia, serif'
        : 'Futura, Helvetica, Arial, sans-serif'};
  margin: 0;
  width: ${props => (props.inline ? 'auto' : '100%')};
  transition: all 200ms ease;
  text-align: ${props => (props.centered ? 'center' : 'auto')};
  font-weight: ${props =>
    props.light ? 'book' : props.bold ? 'bold' : 'normal'};
  font-size: ${props =>
    props.hero
      ? text.hero
      : props.title
        ? text.title
        : props.subtitle
          ? text.subtitle
          : props.small ? text.subtext : text.paragraph};
`
export default Text

export const Link = styled(Text.withComponent('a'))`
  width: auto;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primary};
  &:hover {
    color: ${colors.foreground};
  }
`
