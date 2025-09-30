type Palette =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'

type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type TWColor = `${Palette}-${Shade}` | 'white' | 'black'
