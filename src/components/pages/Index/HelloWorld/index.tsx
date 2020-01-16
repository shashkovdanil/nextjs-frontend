import React from 'react'
import styles from './HelloWorld.module.css'

interface Props {
  userAgent?: string
}

function HelloWorld({ userAgent }: Props) {
  return (
    <h1 className={styles.title}>
      Hello world! - user agent: <span>{userAgent}</span>.
    </h1>
  )
}

export default HelloWorld
