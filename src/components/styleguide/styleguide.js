import { css } from 'emotion'

export const colors = {
  background: 'black',
  foreground: 'white',
  primary: '#EE26FF',
}

export const radii = {
  outer: '14px',
  inner: '8px',
  circle: '100%',
}

export const text = {
  paragraph: '1.2rem',
  subtext: '1rem',
  subtitle: '2rem',
  title: '3rem',
  hero: '7rem',
}

export const contentMaxWidth = 1200
export const layouts = {
  content: css`
    margin: 0 auto;
    max-width: ${contentMaxWidth}px;
    padding: 40px;
  `,
}

export const spacing = {
  small: '0.5rem',
  medium: '2rem',
  large: '4rem',

  s: '12px',
  m: '20px',
  l: '28px',
}

export const shadows = {
  button: css`
    box-shadow: 0px 15px 30px 1px rgba(0, 0, 0, 0.25);
  `,
}

export default {
  spacing,
  radii,
  text,
  colors,
  layouts,
  shadows,
}
