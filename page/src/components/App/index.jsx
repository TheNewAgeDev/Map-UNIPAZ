import styles from './app.module.css'

import Header from '../Header'

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <a href='/map'>Visita el mapa aqui</a>
        <iframe src='/map' width={700} height={400} />
      </div>
    </>
  )
}

export default App
