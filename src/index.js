import React from 'react' 
import ReactDOM from 'react-dom' 
import './index.css' 
import App from './App' 
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

ReactDOM.render(
    <ThemeProvider>
        <CSSReset />
        <ColorModeProvider>
            <App />
        </ColorModeProvider>
    </ThemeProvider>,
    document.getElementById('root')
) 
