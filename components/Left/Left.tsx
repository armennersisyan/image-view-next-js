import * as React from 'react'
import { User } from './types'

type Props = {
  items: User[]
}

const Left = ({items}: Props) => (
  <ul>
    {[1, 2, 3, 4].map((item) => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
)

export default Left
