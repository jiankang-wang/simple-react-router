import React, { Component } from 'react'

export default class UerDetail extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        user: { match.params.user }
      </div>
    )
  }
}
