import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/fontsMap.scss';
import './styles/reset.scss';
import './lib/datePrototype';
import './lib/stringPrototype';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
