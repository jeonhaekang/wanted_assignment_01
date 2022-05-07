import { useState } from 'react'
import styles from './Toggle.module.scss'
import cn from 'classnames'

const Toggle = () => {
  const [toggleState, setToggleState] = useState(true)

  const changeHandler = (state) => {
    setToggleState(state)
  }

  return (
    <div className={styles.toggle}>
      <div className={cn(styles.background, { [styles.trans]: !toggleState })} />
      <button type='button' className={cn({ [styles.selected]: toggleState })} onClick={() => changeHandler(true)}>
        합격
      </button>
      <button type='button' className={cn({ [styles.selected]: !toggleState })} onClick={() => changeHandler(false)}>
        기원
      </button>
    </div>
  )
}

export default Toggle
