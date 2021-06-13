// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  setBitrate = (bitrate) => (e) => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate,
      }
    })
  }

  setResolution = (resolution) => (e) => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution,
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.setBitrate(12)} className="bitrate">12 Bitrate</button>
        <button onClick={this.setResolution('720p')} className="resolution">720p</button>
      </div>
    )
  }
}