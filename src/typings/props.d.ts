declare type CommonColor =
  | 'text'
  | 'primaryText'
  | 'secondaryText'
  | 'primary'
  | 'darkPrimary'
  | 'lightPrimary'
  | 'accentColor'
  | 'idle'
  | 'error'
  | 'success'
  | 'running'
  | 'pending'

declare type ColorProps = {
  color?: CommonColor
}

declare type PositionProps = {
  top?: boolean
  bottom?: boolean
  right?: boolean
  left?: boolean
}

declare type SeparatorProps = {
  width?: number
  height?: number
}
