import styled from 'react-emotion'
import { colors, spacing, contentMaxWidth } from './styleguide'

export default styled.hr`
  border: 0;
  width: 100%;
  border-bottom: ${props => (props.lg ? '4px' : '1px')} solid
    ${props => (props.subtext ? colors.subtext : colors.foreground)};
  margin: ${props => (props.inline ? 0 : spacing.medium)}
    ${props => (props.contentWide ? 'auto' : 0)};
  max-width: ${props =>
    props.contentWide ? `${contentMaxWidth - 80}px` : 'auto'};
`
