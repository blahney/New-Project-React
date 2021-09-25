import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project</title>
        <meta property="og:title" content="New Project" />
      </Helmet>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            alt="image"
            src="/playground_assets/dxdbhslx0aa_bhv-1000h.jpg"
            className={styles['image']}
          />
        </div>
        <div className={styles['container3']}>
          <span className={styles['text']}>Text</span>
          <span className={styles['text1']}>Text</span>
        </div>
        <span className={styles['text2']}>Text</span>
        <span className={styles['text3']}>Text</span>
        <div className={styles['container4']}>
          <img
            alt="image"
            src="/playground_assets/gun%20point-1000w.png"
            className={styles['image1']}
          />
        </div>
      </div>
      <div className={styles['container5']}>
        <h1>This is a test</h1>
        <span>
          This is a test to see if the html works and if images can transfer
          over and it can work on Github
        </span>
      </div>
      <Link
        to="/page"
        className={` ${styles['navlink']} ${projectStyles['button']} ${projectStyles['thqLink']} `}
      >
        Cool Button
      </Link>
    </div>
  )
}

export default Home
