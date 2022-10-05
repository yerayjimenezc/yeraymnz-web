// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// const myCustomDarkTheme = {
//   dark: false,
//   colors: {
//     background: '#181818',
//     surface: '#181818',
//     primary: '#6200EE',
//     'primary-darken-1': '#3700B3',
//     secondary: '#03DAC6',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   }
// }

export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  }
})