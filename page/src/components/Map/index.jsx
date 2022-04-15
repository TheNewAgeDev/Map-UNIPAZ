import { useEffect, useState } from 'react'

const initTemplate = `
  <h1>Cargando...</h1>
  <p>No carga?, posiblemente sea un error de Importación :(</p>
`

const Map = () => {
  const [template, setTemplate] = useState({ __html: initTemplate })

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
