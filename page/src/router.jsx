import { useState } from 'react'

import App from '@/components/App'
import Map from '@/components/Map'

const RouterComponent = () => {
  const [page] = useState(() => {
    const page = window.location.pathname.split('/')[1]
    return page === '' ? 'home' : page
  })

  const getContent = () => {
    if (page === 'home') {
      return <App />
    } else if (page === 'map') {
      return <Map />
    }

    return (
      <div className=''>
        <h1>Pagina no Encontrada | 404</h1>
      </div>
    )
  }

  return (
    <div>
      {getContent()}
    </div>
  )
}

export default RouterComponent
