import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/global.css'

import './styles/nodes/paragraph-node.scss'
import './styles/nodes/heading-node.scss'
import './styles/nodes/blockquote-node.scss'
import './styles/nodes/code-block-node.scss'
import './styles/nodes/horizontal-rule-node.scss'
import './styles/nodes/list-node.scss'
import './styles/nodes/image-node.scss'
import './styles/nodes/image-upload-node.scss'
import './styles/nodes/content.scss'

import AppRoutes from './app/index'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
