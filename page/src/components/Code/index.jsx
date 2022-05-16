import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'

import styles from './code.module.css'

const CODE = `
<iframe width='100%' height='100%' src='https://unimapz.surge.sh/map'></iframe>
`

const HTML = Prism.highlight(CODE, Prism.languages.html, 'html')

const Code = () => {
  return (
    <div>
      <h2 className={styles.title}>Agrega UNIMAPZ a tu Página Web</h2>
      <div
        className={styles.code} dangerouslySetInnerHTML={{
          __html: HTML
        }}
      />
    </div>
  )
}

export default Code
