import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page - New Project</title>
        <meta property="og:title" content="Page - New Project" />
      </Helmet>
      <h1>
        HOLY MOLEY THIS IS A NEW PAGE, CAN THE BUTTON GO BACK TO THE MAIN PAGE?
        LETS SEE!
      </h1>
      <Link
        to="/"
        className={` ${styles['navlink']} ${projectStyles['button']} ${projectStyles['thqLink']} `}
      >
        <span className={styles['text1']}>Button</span>
      </Link>
    </div>
  )
}

export default Page
