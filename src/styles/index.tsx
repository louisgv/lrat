import { DefaultTheme } from 'styled-components/macro'

export const theme: DefaultTheme = {
  name: 'Default',
  color: {
    text: '#FFFFFF',
    primaryText: '#212121',
    secondaryText: '#757575',

    divider: '#BDBDBD',

    primary: '#9C27B0',
    lightPrimary: '#E1BEE7',
    darkPrimary: '#7B1FA2',
    accentColor: '#7C4DFF',
    
    disabled: '#aaa',

    idle: '#bc7eb6',
    pending: '#E7AB48',
    running: '#3772FF',
    success: '#16b50c',
    error: '#b00020'
  },

  zIndex: {
    logo: 1000,
    fab: 1200,
    modal: 1500
  },

  fontSize: {
    header: 3,
  },

  content: {
    
  },

  font: {
    title: '',
    subtitle: '',
    text:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
    code: "'Source Code Pro', monospace"
  }
}
