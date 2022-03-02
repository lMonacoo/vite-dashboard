import {} from 'styled-components';

import { ComposeTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ComposeTheme {}
}
