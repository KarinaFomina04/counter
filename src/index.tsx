import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './components/App'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);