import styles from './Dropdown.module.scss'
import { ReactComponent as Arrow } from '../icon/arrow.svg'
import { useEffect, useRef, useState } from 'react'

const ITEM_LIST = [
  'All Symbols',
  'ACHUSE.PERP',
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSD.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP',
  'DFAUSD.PERP',
  'AWOUSD.PERP',
  'DOGEUSD.PERP',
  'WEMIXUSEUSD.PERP',
]

const Dropdown = () => {
  const [display, setDisplay] = useState('All Symbols')
  const [keyword, setKeyword] = useState('')
  const [showState, setShowState] = useState(false)
  const containerRef = useRef()

  useEffect(() => {
    window.addEventListener('click', clickEventHandler)

    return () => window.removeEventListener('click', clickEventHandler)
  }, [])

  const clickEventHandler = (e) => {
    const state = containerRef.current.contains(e.target)
    if (state) {
      setShowState(true)
    } else {
      setShowState(false)
      setKeyword('')
    }
  }

  const displayHandler = (e) => {
    const text = e.currentTarget.value
    setDisplay(text)
  }

  const searchHandler = (e) => {
    setKeyword(e.currentTarget.value)
  }

  return (
    <div ref={containerRef} className={styles.dropdownContainer}>
      <div className={styles.display}>
        <input type='text' readOnly value={display} />
        <Arrow />
      </div>
      {showState && (
        <div className={styles.dropdown}>
          <input onChange={searchHandler} type='text' className={styles.search} placeholder='Search Symbols' />
          {ITEM_LIST.filter((item) => item.toUpperCase().includes(keyword.toUpperCase())).map((item) => (
            <button key={item} onClick={displayHandler} value={item} type='button' className={styles.item}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
