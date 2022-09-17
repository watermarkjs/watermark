import React, { Component } from 'react'

interface WaterMarkProps {
  title: string
}

export class WaterMark extends Component<WaterMarkProps> {
  render() {
    const { title } = this.props
    return <div>{title}</div>
  }
}

export default WaterMark
