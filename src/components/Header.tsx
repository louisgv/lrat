import styled from 'styled-components/macro'
import { flexCenterColumn } from '../styles/Mixin'

export const Header = styled.header`
  ${flexCenterColumn}
  height: 100vh;
  width: 100vw;
  background: ${p => p.theme.color.primary};
  color: ${p => p.theme.color.text};

  font-size: ${p => p.theme.fontSize.header}em;
  font-weight: 100;
`
