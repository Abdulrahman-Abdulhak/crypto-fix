import React from 'react'

import classNames from 'classnames'

const Button = ({ lable = '', iconUrl = '', onClick = e => {} }) => {
  const classes = classNames('btn', { icon: iconUrl !== '' })
  return (
    <button type='button' className={classes} onClick={onClick}>
      {lable}
      {iconUrl !== '' ? <img src={iconUrl} alt='' /> : null}
    </button>
  )
}

export default Button
