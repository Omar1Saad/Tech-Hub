import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyThemeProvider from './context/themeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyThemeProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </MyThemeProvider>
  </StrictMode>,
)
