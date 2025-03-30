import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { createTheme, MantineProvider, Text } from '@mantine/core'

import './index.css'
import '@mantine/core/styles.css'

const theme = createTheme({
    fontFamily: '"Nunito", sans-serif',

    components: {
        Text: Text.extend({
            styles: (_, { variant }) => {
                if (variant === 'body1') {
                    return {
                        root: {
                            fontSize: '18px',
                            fontWeight: 300,
                            fontFamily: '"Roboto Condensed", sans-serif',
                            color: '#FFF'
                        },
                    }
                }

                return {}
            },
        }),
    },
})

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <App />
    </MantineProvider>
)
