import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <span>{props.text}</span>
      <span>{props.text1}</span>
      <span>{props.text2}</span>
      <span>{props.text3}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  rootClassName: '',
  text2: 'Text',
  text: 'Text',
  text3: 'Text',
  text1: 'Text',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default AppComponent
