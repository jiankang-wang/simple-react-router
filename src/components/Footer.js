import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { filter, setFilter } = this.props
    return (
      <div>
        <span>show</span>
        <button disabled={ filter === 'all' } onClick={ () =>  setFilter('all') }  >ALL</button>
        <button disabled ={ filter === 'active' } onClick={ () => setFilter('active') }>Active</button>
        <button disabled={ filter === 'completed' } onClick={ () => setFilter('completed') } >Completed</button>
      </div>
    )
  }
}
