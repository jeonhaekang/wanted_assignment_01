import styles from './Input.module.scss'
import { ReactComponent as Check } from '../icon/check.svg'
import { ReactComponent as Visible } from '../icon/visible.svg'
import { ReactComponent as NonVisible } from '../icon/noneVisible.svg'
import { useState } from 'react'
import cn from 'classnames'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Input = () => {
  const [emailValidation, setEmailValidation] = useState(false)
  const [inputType, setInputType] = useState(false)

  const typeHandler = () => {
    setInputType((prev) => !prev)
  }

  const emailChangeHandler = (e) => {
    const email = e.currentTarget.value

    EMAIL_REGEX.test(email) ? setEmailValidation(true) : setEmailValidation(false)
  }

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputBox}>
        <input type='text' onChange={emailChangeHandler} />
        <Check className={cn({ [styles.fillOrange]: emailValidation })} />
      </div>
      <div className={styles.inputBox}>
        <input type={inputType ? 'text' : 'password'} />
        {inputType ? <Visible onClick={typeHandler} /> : <NonVisible onClick={typeHandler} />}
      </div>
    </div>
  )
}

export default Input
