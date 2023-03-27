import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetLineClamp from '@twind/preset-line-clamp'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
  /* options */
  presets: [presetAutoprefix(), presetTailwind(), presetLineClamp()],
  theme: {
    extend: {
      colors: {
        'primary-light': {
          DEFAULT: '#eaeff4',
          1: '#d5dee8',
          2: '#abbdd1',
          3: '#97adc6'
        },
        primary: {
          DEFAULT: '#2E5A8C',
          1: '#587ba3',
          2: '#6d8caf',
          3: '#829cba'
        },
        'primary-dark': {
          DEFAULT: '#011C43',
          1: '#01193c',
          2: '#011128',
          3: '#000b1b'
        },
        'secondary-light': {
          DEFAULT: '#fbd4d1',
          1: '#fac5c1',
          2: '#f9b7b2',
          3: '#f7a9a2'
        },
        secondary: {
          DEFAULT: '#F26F64',
          1: '#f37d74',
          2: '#f58c83',
          3: '#f69a93'
        },
        'secondary-dark': {
          DEFAULT: '#da645a',
          1: '#c25950',
          2: '#a94e46',
          3: '#793832'
        },
        elevation: {
          1: '#030305',
          2: '#0D0D10',
          3: '#16161A',
          4: '#202026',
          5: '#2B2B32',
          6: '#404048'
        },
        content: {
          DEFAULT: '#FFFFFF',
          medium: '#C7C7D1',
          dark: '#A7A7BE',
          muted: '#6E6B80'
        }
      }
    },
    screens: {
      xs: '320px'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    }
  }
})
