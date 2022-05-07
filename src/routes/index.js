import styles from './Routes.module.scss'
import Toggle from '../components/Toggle'
import Tap from '../components/Tap'
import Slider from '../components/Slider'

const App = () => {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tap />
      <Slider />
    </div>
  )
}

export default App
