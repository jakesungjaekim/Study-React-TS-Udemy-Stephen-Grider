import React from 'react'
import ReactDOM from 'react-dom/client'
import EventComponent from './events/EventComponent'
import UserSearch from './state/UserSearch'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserSearch />
  </React.StrictMode>,
)
