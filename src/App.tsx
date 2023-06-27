import { createTheme, ThemeProvider } from '@mui/material'
import CalculatePage from './base/components/CalculatePage'

function App() {
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
        components: {
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        padding: 8,
                        '&:last-child': {
                            paddingBottom: 8,
                        },
                    },
                },
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <CalculatePage />
        </ThemeProvider>
    )
}

export default App
