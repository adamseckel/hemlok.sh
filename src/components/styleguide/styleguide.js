import { css } from 'emotion'

export const colors = {
  background: 'white',
  foreground: 'black',
  primary: '#FA5B47',
}

export const radii = {
  outer: '14px',
  inner: '8px',
  circle: '100%',
}

export const text = {
  paragraph: '1.2rem',
  subtext: '1rem',
  subtitle: '1.4rem',
  title: '1.6rem',
  hero: '4rem',
  serif: 'Georgia, serif',
  sans: 'Futura, Helvetica, Arial, sans-serif',
}

export const contentMaxWidth = 1400
export const layouts = {
  content: css`
    margin: 0 auto;
    max-width: ${contentMaxWidth}px;
    padding: 40px;
  `,
}

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '2rem',
  lg: '4rem',

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
