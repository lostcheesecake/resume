import React from 'react'
import ReactDOM from 'react-dom'
import './components/css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
