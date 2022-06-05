import styles from './footer.module.css'
import logo from '../../../assets/icon.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>

        <div className={styles.col}>
          <a className={styles.a} target='_blank' href='https://github.com/TheNewAgeDev/UNIMAPZ' rel='noreferrer'>
            <img className={styles.img} src={logo} alt='Github Logo' />
            GitHub
          </a>
        </div>

        <div className={styles.col}>
          &copy; UNIMAPZ - 2022
        </div>

        <div className={styles.col}>
          <div>
            <a className={styles.a} href='https://leafletjs.com/' target='_blank' rel='noreferrer'>Leaflet</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
