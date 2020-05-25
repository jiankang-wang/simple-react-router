import React, { Component } from 'react'
import { Route } from "react-router-dom";
import UserDetail from '../components/UerDetail'


export default class User extends Component {
  render() {
    const { match }  = this.props
    return (
      <div>
        <Route path={`${match.path}/:user`} component={UserDetail} />
        {/* user: { match.params.user } */}
      </div>
    )
  }
}
