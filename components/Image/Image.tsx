import * as React from 'react'

import useImageStyles from './styles'

const Image = () => {
  const classNames = useImageStyles()
  return (
    <div className={classNames.image}>
      Hello
      <h2>Hi</h2>
    </div>
  )
}

export default Image
