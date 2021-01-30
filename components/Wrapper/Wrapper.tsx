import * as React from 'react'

import useWrapperStyles from './styles'

type PropTypes = {
  children?: any
}

const Wrapper = ({ children }: PropTypes) => {
  const classNames = useWrapperStyles()
  return <div className={classNames.wrapper}>{children}</div>
}

export default Wrapper
