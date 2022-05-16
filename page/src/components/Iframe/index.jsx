import styles from './iframe.module.css'

const Iframe = () => {
  return (
    <iframe
      className={styles.iframe}
      src={
        import.meta.env.MODE === 'development' ? 'https://unimapz.surge.sh/map' : '/map'
      }
    />
  )
}

export default Iframe
