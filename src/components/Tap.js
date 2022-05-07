import { useState } from 'react'
import styles from './Tap.module.scss'
import cn from 'classnames'

const Tap = () => {
  const [menu, setMenu] = useState(0)
  const menuList = ['원티드', '프리', '온보딩']

  const clickHandler = (e) => {
    setMenu(e.currentTarget.value * 1)
  }

  return (
    <div className={styles.tap}>
      {menuList.map((item, i) => (
        <button
          key={item}
          type='button'
          value={i}
          onClick={clickHandler}
          className={cn({ [styles.selected]: menu === i })}
        >
          {item}
        </button>
      ))}
      <div className={cn(styles.selectedBar, { [styles.trans1]: menu === 1 }, { [styles.trans2]: menu === 2 })} />
    </div>
  )
}

export default Tap
