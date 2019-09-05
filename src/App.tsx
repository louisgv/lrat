import React from 'react'

import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components/macro'
import { theme, Global } from './styles'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import { Text } from 'styles'

import { name, version } from '../package.json'

const date = new Date()
const year = date.getFullYear()

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global />
      <Header>HELLO</Header>
      <Footer>
        <Text color="primary">{name}</Text> <Text color="error">v{version}</Text>{' '}
        ©{year} L
      </Footer>
    </>
  </ThemeProvider>
)

export default hot(App)
