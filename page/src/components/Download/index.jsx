import styles from './download.module.css'

const Download = () => {
  return (
    <div>
      <h2>Descarga UNIMAPZ</h2>
      <a className={styles.download} href='/map.zip' download>UNIMAPZ v1.0.0 - ZIP</a>
    </div>
  )
}

export default Download
