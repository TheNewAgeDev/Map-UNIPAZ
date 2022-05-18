import ReactTypingEffect from 'react-typing-effect'

import styles from './credits.module.css'

const CONTRIBUTORS = [
  'Natalia Rodríguez',
  'Luis Osorio',
  'Jhan Lopez',
  'Breinner Rueda',
  'Javier Rodríguez',
  'Bryan Muñoz',
  'Aldair Luque'
]

const Typing = () => {
  return (
    <ReactTypingEffect
      text={CONTRIBUTORS}
      speed={100}
      eraseSpeed={50}
      eraseDelay={500}
      typingDelay={100}
      cursorRenderer={cursor => <h2 className={styles['credits-color']}>{cursor}</h2>}
      displayTextRenderer={(text, i) => {
        return (
          <h2 className={styles['credits-color']} key={i}>
            {text}
          </h2>
        )
      }}
    />
  )
}

const Credits = () => {
  return (
    <div className={styles.credits}>
      Mapa Creado Por<br /> <Typing />
    </div>
  )
}

export default Credits
