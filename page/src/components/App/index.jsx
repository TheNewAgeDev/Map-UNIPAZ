import styles from './app.module.css'

import Header from '../Header'

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <a href='/map'>Visita el mapa aqui</a>
        <iframe src='/map'/>
      </div>
    </>
  )
}

export default App
