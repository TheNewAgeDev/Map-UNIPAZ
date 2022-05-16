import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Button from '@/components/Button'
import Iframe from '@/components/Iframe'
import Text from '@/components/Text'
import Code from '@/components/Code'
import Download from '@/components/Download'
import Credits from '@/components/Credits'

import styles from './app.module.css'

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.app}>
        <Button />
        <Iframe />
        <Text />

        <div className={styles.row}>
          <Code />
          <Download />
        </div>

        <Credits />
      </div>

      <Footer />
    </>
  )
}

export default App
