import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WaterMark extends Component {
  render() {
    const { title } = this.props
    return <div>{title}</div>
  }
}

WaterMark.propTypes = {
  title: PropTypes.string,
}

export default WaterMark
