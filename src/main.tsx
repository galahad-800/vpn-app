import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { createTheme, MantineProvider, Text } from '@mantine/core'

import './index.css'
import '@mantine/core/styles.css'

const theme = createTheme({
    fontFamily: 'Arial, sans-serif',

    components: {
        Text: Text.extend({
            styles: (_, { variant }) => {
                if (variant === 'subtitle') {
                    return {
                        root: {
                            fontSize: '21px',
                            fontWeight: 500,
                            fontStyle: 'normal',
                            fontFamily: 'monospace',
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
