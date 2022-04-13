import { useEffect, useState } from 'react'

const Map = () => {
  const initTemplte = `
    <h1>Cargando...</h1>
    <p>No carga?, posiblemente sea un error de Importación :(</p>
  `
  const [template, setTemplate] = useState({ __html: initTemplte })

  useEffect(() => {
    const loadFile = async () => {
      const __html = await import('../../../public/map.html?raw')
      setTemplate({ __html: __html.default })
    }

    loadFile()
  }, [])

  return (
    <div dangerouslySetInnerHTML={template} />
  )
}

export default Map
