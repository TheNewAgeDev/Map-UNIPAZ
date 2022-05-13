import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import styles from './app.module.css'

import Header from '../Header'

const CODE = `
<iframe width='100%' height='100%' src='https://unimapz.surge.sh/map'></iframe>
`

const HTML = Prism.highlight(CODE, Prism.languages.html, 'html')

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <a href='/map'>Visita el mapa aqui</a>
        <iframe src='/map' /><br />
        <div>
          <h2>El codigo fuente del mapa en modo producción</h2>
          <a href='/map.zip' download>
            Descarga el codigo fuente aqui
          </a>

          <br /><br />
          <h2>Coloca el mapa en tu pagina web</h2>
          <div className={styles.code} dangerouslySetInnerHTML={{ __html: HTML }} />
        </div>
      </div>
    </>
  )
}

export default App
