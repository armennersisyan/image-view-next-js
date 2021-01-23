import * as React from 'react'
import { User } from './types'

type Props = {
  items: User[]
}

const Test = ({ items }: Props) => (
  <ul>
    {[1, 2, 3, 4].map((item) => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
)

export default Test
