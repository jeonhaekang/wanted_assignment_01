import styles from './Slider.module.scss'

const Slider = () => {
  return (
    <div className={styles.slider}>
      <input type='range' />
    </div>
  )
}

export default Slider
