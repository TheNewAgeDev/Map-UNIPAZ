import Header from '@/components/Header'
import Button from '@/components/Button'
import Iframe from '@/components/Iframe'
import Text from '@/components/Text'
import Code from '@/components/Code'

import styles from './app.module.css'

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.app}>
        <Button />
        <Iframe />
        <Text />
        <Code />
      </div>

    </>
  )
}

export default App
