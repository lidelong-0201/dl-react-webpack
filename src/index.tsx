import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './Layout/index'
import './index.less'

const root = document.querySelector('#root')

if (root) {
  createRoot(root).render(<App />)
}
