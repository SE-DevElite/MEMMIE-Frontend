import 'styled-components'
import { theme } from '@/common/themes/themes'

type ThemeInterface = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
