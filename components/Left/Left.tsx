import * as React from 'react'
import { User } from './types'

type PropTypes = {
  items?: User[]
}

const Left = ({ items }: PropTypes) => (
  <ul>
    {[1, 2, 3, 4].map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

export default Left
