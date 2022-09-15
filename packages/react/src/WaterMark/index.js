import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class WaterMark extends Component {
  render() {
    const { platformName } = this.props
    return (
      <div className={'wm-loading'}>
        <div className={'wm-loading-center'}>
          <div className={'wm-loading-center-absolute'}>
            <div
              className={classNames(
                'wm-loading-center-absolute-object',
                'wm-loading-center-absolute-four',
              )}
            />
            <div
              className={classNames(
                'wm-loading-center-absolute-object',
                'wm-loading-center-absolute-three',
              )}
            />
            <div
              className={classNames(
                'wm-loading-center-absolute-object',
                'wm-loading-center-absolute-two',
              )}
            />
            <div
              className={classNames(
                'wm-loading-center-absolute-object',
                'wm-loading-center-absolute-one',
              )}
            />
          </div>
          <h1 className={'wm-loading-center-text'}>
            <span>{platformName}</span>
          </h1>
          <h1 className={'wm-loading-center-text'}>
            <span>{platformName}</span>
          </h1>
        </div>
      </div>
    )
  }
}

WaterMark.propTypes = {
  platformName: PropTypes.string,
}

export default WaterMark
