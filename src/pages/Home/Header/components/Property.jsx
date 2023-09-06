import React from 'react'

import Button from '../../../../components/Button'
import arrow from '../../../../assets/icons/arrow.svg'

const Property = ({
  icon,
  iconName = '',
  description = '',
  buttonLabel = '',
}) => {
  return (
    <div className='property'>
      <img src={icon} alt={iconName} />
      <p className='decription'>{description}</p>
      <Button lable={buttonLabel} iconUrl={arrow} />
    </div>
  )
}

export default Property
