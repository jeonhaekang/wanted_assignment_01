import styles from './Routes.module.scss'
import Toggle from '../components/Toggle'
import Tap from '../components/Tap'
import Slider from '../components/Slider'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'

const App = () => {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tap />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
