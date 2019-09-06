import React from 'react'

import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components/macro'
import { theme, Global, Separator } from './styles'

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
      <Header>Hi</Header>
      <Footer>
        © {year} L <Separator width={0.5} />
        <Text color="primary">{name}</Text>
        <Separator width={0.5} />
        <Text color="error">v{version}</Text>
      </Footer>
    </>
  </ThemeProvider>
)

export default hot(App)
