import { Button, createTheme, ThemeProvider } from '@mui/material'

function App() {
    const theme = createTheme({})

    return (
        <ThemeProvider theme={theme}>
            <Button variant={'filled'}>Test</Button>
        </ThemeProvider>
    )
}

export default App
