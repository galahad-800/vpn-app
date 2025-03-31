import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import {
    Container,
    createTheme,
    MantineProvider,
    rem,
    Text,
} from '@mantine/core'

import './index.css'
import '@mantine/core/styles.css'

const CONTAINER_SIZES: Record<string, string> = {
    xs: rem(400),
    sm: rem(1140),
    md: rem(1320),
    lg: rem(1820),
    xl: rem(1920),
}

const theme = createTheme({
    fontFamily: '"Nunito", sans-serif',

    components: {
        Container: Container.extend({
            vars: (_, { size, fluid }) => ({
                root: {
                    '--container-size': fluid
                        ? '100%'
                        : size !== undefined && size in CONTAINER_SIZES
                          ? CONTAINER_SIZES[size]
                          : rem(size),
                    paddingInline: 0,
                },
            }),
            defaultProps: {
                size: 'md',
            },
        }),
        Text: Text.extend({
            styles: (_, { variant }) => {
                if (variant === 'body1') {
                    return {
                        root: {
                            fontSize: '18px',
                            fontWeight: 300,
                            fontFamily: '"Roboto Condensed", sans-serif',
                            color: '#FFF',
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
