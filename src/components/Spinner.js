import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src='loading.gif' alt="loading"/>
      </div>
    )
  }
}
