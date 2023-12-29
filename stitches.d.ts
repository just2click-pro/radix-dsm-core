import { CSS } from './src/assets'

declare module '@stitches/react' {
  // Declare the module's exports here
}

declare module 'react' {
  interface Attributes {
    css?: CSS
  }
}
