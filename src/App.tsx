import React from 'react'

import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components/macro'

import { Header } from 'lrct/components/Header'
import { Footer } from 'lrct/components/Footer'
import { theme, Global, Separator, Text } from 'lrct/styles'

import { version, repository } from '../package.json'

const date = new Date()
const year = date.getFullYear()

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global />
      <Header>Hi</Header>
      <Footer>
        <Text color="primary">© {year} L</Text> <Separator width={0.5} />
        <Separator width={0.5} />
        <a
          href={`https://github.com/${repository}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/{repository}@{version}
        </a>
      </Footer>
    </>
  </ThemeProvider>
)

export default hot(App)
