import React from 'react'
import { User } from './User'

export class UserList extends React.Component {
  render () {
    const items = this.props.items
    return (
      <div className = "ccc">
        {items.map((item, i) => (
          <User {...item} key={i} />
        ))}
      </div>
    )
  }
}
