import * as React from 'react'
import Text from './Text'
import styled from 'react-emotion'
import { text, spacing } from './styleguide'

const ListItem = styled(Text.withComponent('li'))`
  margin-bottom: ${spacing.s};
`
const List = styled(Text.withComponent('ul'))`
  padding-left: ${text.paragraph};
`

export default ({ list, ...props }) => (
  <List {...props}>
    {list.map((item, i) => (
      <ListItem key={i} {...props}>
        {item}
      </ListItem>
    ))}
  </List>
)
